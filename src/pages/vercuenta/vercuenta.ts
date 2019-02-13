import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { TicketsProvider } from '../../providers/tickets/tickets';
import { TicketPage } from '../ticket/ticket';



/**
 * Generated class for the VercuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-vercuenta',
  templateUrl: 'vercuenta.html',
})
export class VercuentaPage {

  private id;
  private arreglo:any = [];
  private total;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ticketsPrd:TicketsProvider,
  private alertCtrl:AlertController,private toasCtrl:ToastController) {

    this.id = navParams.get("id");
    this.obtenerlista(this.id);
  }

  ionViewDidEnter() {
    this.obtenerlista(this.id);
  }

  public obtenerlista(id): any {
    this.ticketsPrd.getsDetalleAgrupado(id).subscribe(datos => {
        this.arreglo = datos;
        this.total = 0;
        for(let item of this.arreglo){
           this.total = this.total + (item.precio*item.cantidad);
        }
    });
  }

  public cobrar(){
    let alerta = this.alertCtrl.create({
      title: "Efectivo", inputs: [{ placeholder: "Efectivo", type: "number", name: "cantidad" }],
      buttons: [{
        text: "Cobrar", handler: datos => {
          let cantidad = datos.cantidad;
          if(Number(cantidad) >= Number(this.total)){
            let objEnviar = {
              id: this.id,
              total: this.total
            };
  
            this.ticketsPrd.cobrarTicket(objEnviar).subscribe(res => {
              let toas = this.toasCtrl.create({ message: res.respuesta, duration: 1000 });
              toas.present();
              this.navCtrl.push(TicketPage,{id_ticket:this.id,billete:datos.cantidad});
              //this.viewCtrl.dismiss({ id_ticket: objEnviar.id_ticket,billete:cantidad });
            });

          }else{
              let alerta = this.alertCtrl.create({title:"Monto incorrecto",subTitle:"El monto ingresado debe ser mayor o igual al monto gastado",
            buttons:[{text:"Aceptar",handler:()=>{}}]});
              alerta.present();
          }
        }
      }]
    });
    alerta.present();
  }

}
