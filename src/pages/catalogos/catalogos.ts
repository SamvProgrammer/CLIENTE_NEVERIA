import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController,AlertController,ToastController ,Refresher} from 'ionic-angular';
import { CrearproductosPage } from '../crearproductos/crearproductos';
import { CatalogosProvider } from '../../providers/catalogos/catalogos';

/**
 * Generated class for the CatalogosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-catalogos',
  templateUrl: 'catalogos.html',
})
export class CatalogosPage {

  public arreglo:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private catalogosPro:CatalogosProvider,
    private actionSheetCtrl:ActionSheetController,private alerta:AlertController,private toast:ToastController) {
      this.catalogosPro.getProductos().subscribe(datos => {
       this.arreglo = datos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogosPage');
  }


  public nuevo(){
    this.navCtrl.push(CrearproductosPage,{boton:"Agregar"});
  }

  public seleccionar(i){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Seleccionar acción',
	cssClass: 'action-sheets-groups-page',
      buttons: [
        {
          text: 'Modificar',
          icon:"brush",
          handler: () => {
            let obj = i;
            
            this.navCtrl.push(CrearproductosPage,{parametro:i,boton:"Actualizar"});
          }
        },
        {
          text: 'Eliminar',
          icon:"trash",
          handler: () => {
            let id = i.id;
            const alerta = this.alerta.create({
              title:"Aviso",
              subTitle:"¿Desea eliminar el producto?",
              buttons:[{
                text:"Aceptar",
                handler:()=>{
                  this.catalogosPro.deleteProducto(id).subscribe(datos => {
                      const toastMensaje = this.toast.create({
                        message:datos.respuesta,
                        duration:1500
                      });
                      toastMensaje.present();

                      this.catalogosPro.getProductos().subscribe(datos => {
                          this.arreglo = datos;                        
                      });
                  });
                }
              },
               {
                 text:"Cancelar"
               }]
            });
            alerta.present();
          }
        },{
          text: 'Cancelar',
          icon:"close",
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    actionSheet.present();

  }


  public doRefresh(refresher:Refresher){

    this.catalogosPro.getProductos().subscribe(datos => {
      this.arreglo = datos;
      refresher.complete();
   });
  }
}
