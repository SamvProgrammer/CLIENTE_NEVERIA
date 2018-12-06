import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalle-cuenta',
  templateUrl: 'detalle-cuenta.html',
})
export class DetalleCuentaPage {

  private arreglo:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams){}
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleCuentaPage');
  }

}
