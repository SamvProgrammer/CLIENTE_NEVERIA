import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import { DetalleCuentaProductosAgregarPage } from '../detalle-cuenta-productos-agregar/detalle-cuenta-productos-agregar';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentasPage');
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
          this.navCtrl.push(DetalleCuentaProductosAgregarPage);
        }
      }]

    });
    alerta1.present();
  }
}
