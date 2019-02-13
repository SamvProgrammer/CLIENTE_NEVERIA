import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TicketsProvider } from '../../providers/tickets/tickets';
import { TicketPage } from '../ticket/ticket';
/**
 * Generated class for the TransaccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html',
})
export class TransaccionesPage {

  public arreglo: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tickets: TicketsProvider) {
    this.obtenerlista();
  }

  ionViewDidEnter() {
    this.obtenerlista();
  }

  public obtenerlista(): any {
    this.tickets.gets(true).subscribe(datos => {
      this.arreglo = datos;
      console.log(this.arreglo);
    });
  }

  public actualizandoTransacciones(refresher): any {

    this.tickets.gets(true).subscribe(datos => {
      this.arreglo = datos;
      refresher.complete();
    });
  }



  public reimprimir(obj): any {
    console.log(obj);
    this.navCtrl.push(TicketPage, { id_ticket: obj.id });
  }
}


