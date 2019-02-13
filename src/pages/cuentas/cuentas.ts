import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { DetalleCuentaPage } from '../detalle-cuenta/detalle-cuenta';
import { TicketsProvider } from '../../providers/tickets/tickets';
import { VercuentaPage } from '../vercuenta/vercuenta';
/**
 * Generated class for the CuentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-cuentas',
  templateUrl: 'cuentas.html',
})
export class CuentasPage {


  public arreglo:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl:AlertController,private ticketsPrd:TicketsProvider,
            private toasCtrl:ToastController) {
      this.obtenerlista();
  }


  public obtenerlista():any{
     this.ticketsPrd.gets(false).subscribe(datos => {
        this.arreglo = datos;
     });
  }

  ionViewDidEnter() {
    this.obtenerlista();
}


  public nuevo(){
  
    let alerta1 = this.alertCtrl.create({
      title: 'Agregando',
      subTitle: 'Cuenta nueva',
      inputs: [{
        name: 'cuenta',
        placeholder: 'Ingresar cuenta'
      }],
      buttons: [{
        text: "Ingresar",
        handler: datos => {

           //Para sacar el día de hoy en la comanda....
           let today = new Date();
          
           let identificadorCuenta = datos.cuenta;
           let objTicket = {
             nombre: identificadorCuenta,
             fecha : today
           };

          this.ticketsPrd.insertar(objTicket).subscribe(datos => {
            let toas = this.toasCtrl.create({message:datos.respuesta,duration:1500});
            toas.present();
              if(datos.insertado == true){
                this.navCtrl.push(DetalleCuentaPage,{id:datos.id});
              }
          },error =>{
            let toas = this.toasCtrl.create({message:"Error al insertar el registro",duration:1500});
            toas.present();
          });
          
          
        }
      }]

    });
    alerta1.present();
  }

  public actualizandoTransacciones(refresher): any {

    this.ticketsPrd.gets(false).subscribe(datos => {
      this.arreglo = datos;
      refresher.complete();
    });
  }

  public entrarDetalle(i):any{
    this.navCtrl.push(DetalleCuentaPage,{id:i.id});

  }

  public cobrar(id):any{
    this.navCtrl.push(VercuentaPage,{id:id});
  }

  public cancelar(id):any{

    let alerta = this.alertCtrl.create({title:"Cancelar cuenta",message:"¿Desea Cancelar la cuenta?",buttons:[{
      text:"Si",handler:()=>{
        this.ticketsPrd.cancelar(id).subscribe(datos =>{

          let alerta = this.toasCtrl.create({message:"Orden Cancelado correctamente",duration:1500});
          alerta.present();
          this.ionViewDidEnter();
        });
      }
    },{
      text:"No"
    }]});

    alerta.present();
  }
}
