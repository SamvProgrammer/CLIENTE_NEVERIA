import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  NavController, NavParams,AlertController,ToastController } from 'ionic-angular';


/*
  Generated class for the PrdverificaentrarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrdverificaentrarProvider {

  private entrar: boolean = false;
  private activarMenu: boolean = false;
  private objUsuario: any;
  private id_carrito:any;
  constructor(private alerta: AlertController, private toasCtrl: ToastController) {

  }


  //Establece si aparece la pantalla número uno....
  public getEntrar(): boolean {
    return this.entrar;
  }
  public setEntrar(parametro: boolean): void {
    this.entrar = parametro;
  }

  public setActivaMenu(activa: boolean) {
    this.activarMenu = activa;
  }
  public getActivaMenu(): boolean {

    return this.activarMenu;
  }

  

  public ingresarUsuarios(usuario: any, contraseña: any): any {


  }  
}
