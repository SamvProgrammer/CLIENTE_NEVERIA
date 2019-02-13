import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CatalogosProvider } from '../../providers/catalogos/catalogos';
import { TicketsProvider } from '../../providers/tickets/tickets';
import { VercuentaPage } from '../vercuenta/vercuenta';


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

  public arreglo: any = [];
  public valor = 1;
  public id = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private catalogoPrd: CatalogosProvider,
    private toastCtrl: ToastController, private ticketsPrd: TicketsProvider) {
    this.catalogoPrd.getProductos().subscribe(datos => {
      this.arreglo = datos;
      this.arreglo.forEach(element => {
        element.cantidad = 1;
      });

    });


    this.id = this.navParams.get("id");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleCuentaProductosAgregarPage');
  }


  public getcantidad(indice): any {
    return this.arreglo[indice].cantidad;
  }

  public restar(indice): any {
    let cantidad = this.arreglo[indice].cantidad;
    if (cantidad == 1)
      cantidad = 1;
    else
      cantidad = cantidad - 1;

    this.arreglo[indice].cantidad = cantidad;
  }

  public sumar(indice): any {
    let cantidad = this.arreglo[indice].cantidad;
    cantidad = cantidad + 1;
    this.arreglo[indice].cantidad = cantidad;

  }

  public agregarCarrito(indice) {
    let obj = this.arreglo[indice];

    let enviar = {
      id_producto: obj.id,
      id_ticket: this.id,
      cantidad: obj.cantidad
    }

    this.ticketsPrd.insertarDetalle(enviar).subscribe(datos => {
      let mensaje = this.toastCtrl.create({
        message: "Productos insertados",
        duration: 1500
      });
      mensaje.present();
    });

  }

  public verCuenta() {
    this.navCtrl.push(VercuentaPage,{id:this.id});
  }

}
