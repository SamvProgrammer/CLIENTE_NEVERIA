import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController } from 'ionic-angular';
import { CatalogosProvider } from '../../providers/catalogos/catalogos';
import { DetalleCuentaPage } from '../detalle-cuenta/detalle-cuenta';

/**
 * Generated class for the DetalleCuentaProductosAgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalle-cuenta-productos-agregar',
  templateUrl: 'detalle-cuenta-productos-agregar.html',
})
export class DetalleCuentaProductosAgregarPage {
  public arreglo:any = [];
  public valor = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,private catalogoPrd:CatalogosProvider,
  private toastCtrl:ToastController) {
    this.catalogoPrd.getProductos().subscribe(datos =>{
        this.arreglo = datos;
        this.arreglo.forEach(element => {
          element.cantidad = 1;
        });
        
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleCuentaProductosAgregarPage');
  }


  public getcantidad(indice):any{
    return this.arreglo[indice].cantidad;
  }

  public restar(indice):any{
    let cantidad = this.arreglo[indice].cantidad;
    if(cantidad == 1)
     cantidad = 1;
     else
      cantidad = cantidad - 1 ;

      this.arreglo[indice].cantidad = cantidad;
  }

  public sumar(indice):any{
    let cantidad = this.arreglo[indice].cantidad;
    cantidad = cantidad + 1 ;
    this.arreglo[indice].cantidad = cantidad;
    
  }

  public agregarCarrito(indice){
    let obj = this.arreglo[indice];
    const mensaje = this.toastCtrl.create({
      message:"Producto agregado al carrito",
      duration:1000
    });
    mensaje.present();
    console.log(obj);
  }

  public verCuenta(){
      this.navCtrl.push(DetalleCuentaPage);
  }
}
