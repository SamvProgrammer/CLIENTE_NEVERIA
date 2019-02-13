import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TicketsProvider } from '../../providers/tickets/tickets';
import { CurrencyPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  private billete;
  private arreglo: any = [];
  private total = 0;
  private folio = 0;
  private nombre_ticket = "";
  private nombre_sucursal = "";
  private id_token = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ticketsPrd: TicketsProvider,
    private alerta: AlertController,
    private toasCtrl: ToastController,
    private currency: CurrencyPipe,
    public http: HttpClient,
    private Vibrador: Vibration,
    private google: GooglePlus,
    private sms: SMS) {
    this.billete = navParams.get("billete");
    let id_ticket = navParams.get("id_ticket");
    ticketsPrd.getsDetalleAgrupado(id_ticket).subscribe(datos => {
      this.arreglo = datos;
      for (let i of datos) {
        this.total = this.total + (i.precio*i.cantidad);
        this.folio = i.id_ticket;
        this.nombre_ticket = i.nombre;
      }
    });



    if (this.billete) {
    //  this.Vibrador.vibrate(2000);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  public cerrar1() {
    this.navCtrl.popToRoot();
  }

  public enviar(): any {
    let opciones = this.alerta.create({
      title: "Modo de envío",
      message: "Seleccione la manera que se enviara el ticket",
      inputs: [{
        type: "radio",
        value: "1",
        name: "email",
        label: "Correo Electrónico",
        checked: true
      },
      {
        type: "radio",
        value: "2",
        name: "sms",
        label: "Mensaje de Texto"
      }], buttons: [{
        text: "Aceptar", handler: datos => {

          let mensaje = "";

          let sucursal = "Sucursal: " + this.nombre_sucursal + "\n";
          let cuenta = "N° Folio: " + this.folio + "\n";
          let lineas = "-----------------------\n";
          let lineas2 = "Productos consumidos\n";
          let productos = "";
          let total = "Total: " + this.currency.transform(this.total);
          for (let item of this.arreglo) {
            let cantidad = item.cantidad;
            let nombre = item.nombre;
            let unitario = this.currency.transform(item.unitario);
            let precioTotalCantidad = this.currency.transform(item.precio_total);


            productos = productos + cantidad + " " + nombre + " " + precioTotalCantidad + "\n";
          }

          mensaje = sucursal + cuenta + lineas + lineas2 + productos + lineas + total;


          if (datos == 1) {//Este es para envíar el ticket por correo electrónico de gmail...
            this.google.login({})
              .then(res => {

                let alert = this.alerta.create({
                  title: "Correo Electrónico", message: "Ingresa el correo electrónico",
                  inputs: [{ type: "text", placeholder: "Correo Eletrónico", name: "correo" }],
                  buttons: [{
                    text: "Aceptar", handler: parametro => {
                      let id_token = res.accessToken;
                      const httpOptions = {
                        headers: new HttpHeaders({
                          'Content-Type': 'message/rfc822',
                          'Authorization': 'Bearer ' + id_token
                        })
                      };

                      let direccion = "https://www.googleapis.com/upload/gmail/v1/users/santiagoantoniomariscal%40gmail.com/messages/send?uploadType=multipart";


                      let ms1 = "From: Pig&Fish <santiagoantoniomariscal@gmail.com>\n";
                      ms1 = ms1 + "to: " + parametro.correo + "\n";
                      ms1 = ms1 + "Subject: Ticket de compra Pig&Fish\n";
                      ms1 = ms1 + "MIME-Version: 1.0\n";
                      ms1 = ms1 + "Content-Type: multipart/mixed;\n";
                      ms1 = ms1 + "        boundary=\"limite1\"\n\n";
                      ms1 = ms1 + "En esta sección se prepara el mensaje\n\n";
                      ms1 = ms1 + "--limite1\n";
                      ms1 = ms1 + "Content-Type: text/plain\n\n";
                      ms1 = ms1 + mensaje;

                      this.http.post(direccion, ms1, httpOptions).subscribe(datos => {
                        let toas = this.toasCtrl.create({ message: "Mensaje envíado correctamente", duration: 1500 });
                        toas.present();
                      });
                    }
                  }]
                });
                alert.present();


              })
              .catch(err => {
                let alerta = this.alerta.create({ title: err });
                alerta.present();
                this.navCtrl.pop();
              });
          } else {//Este es para envíar el ticket por medio de un mensaje sms
            let ventanaCelular = this.alerta.create({
              title: "Aviso",
              message: "Número de celular",
              inputs: [{ type: "number", placeholder: "Número de celular", name: "celular" }],
              buttons: [{
                text: "Enviar", handler: datos => {
                  if (datos.celular.length == 10) {
                    this.sms.send(datos.celular, mensaje);
                    let toas = this.toasCtrl.create({ message: "Mensaje enviado correctamente", duration: 1500 });
                    this.navCtrl.pop();
                    toas.present();
                  } else {
                    let toas = this.toasCtrl.create({ message: "Error en número de celular, intente de nuevo", duration: 1500 });
                    toas.present();
                  }
                }
              }]
            });
            ventanaCelular.present();
          }
        }
      }]
    });


    opciones.present();
  }


}
