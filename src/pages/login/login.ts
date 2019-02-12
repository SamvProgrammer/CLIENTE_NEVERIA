import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PrdverificaentrarProvider } from '../../providers/prdverificaentrar/prdverificaentrar';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario:any ="";
  public pass:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,
  private p:PrdverificaentrarProvider) {
  }

  public login(){
    if(this.usuario == "administrador" && this.pass == "12345"){
       this.p.setEntrar(true);
       this.p.setActivaMenu(true);
    }else{

       const aux = this.alert.create({
         title:"Contraseña invalida",
         buttons:["Aceptar"]
       });
       aux.present();
    }
  }

}
