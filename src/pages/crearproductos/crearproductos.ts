import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogosProvider } from '../../providers/catalogos/catalogos';
/**
 * Generated class for the CrearproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-crearproductos',
  templateUrl: 'crearproductos.html',
})
export class CrearproductosPage {

  myForm: FormGroup;
  public  boton:string="";
  private id;
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private catalogosPrd:CatalogosProvider,
    private toas:AlertController,
    private parametros:NavParams
  ) {
    let variable = this.parametros.get("parametro");
    
    this.boton = this.parametros.get("boton");
    if(variable==undefined){
      const obj = {nombre:"",descripcion:"",precio:0}
      this.myForm = this.createMyForm(obj);
    }else{

      this.id = variable.id;
      this.myForm = this.createMyForm(variable);
    }
    
  }
  
  private createMyForm(obj){
    return this.formBuilder.group({
      nombre: [obj.nombre, Validators.required],
      descripcion: [obj.descripcion, Validators.required],
      precio: [obj.precio, Validators.required]
    });
  }
  saveData(){
    let obj = this.myForm.value;
    let nombre = obj.nombre;
    let descripcion = obj.descripcion;
    let precio = obj.precio;

    obj = {
      nombre:nombre,
      descripcion:descripcion,
      precio:precio
    }


    if(this.boton == "Actualizar"){
      obj.id = this.id;
      this.catalogosPrd.putProducto(obj).subscribe(datos => {
        let respuesta = datos.respuesta;
        const alerta = this.toas.create({
         title:"Aviso",
         subTitle: respuesta,
         buttons:["Aceptar"]
        });
  
        alerta.present();
      });
    }else{
      this.catalogosPrd.setProducto(obj).subscribe(datos => {
        let respuesta = datos.respuesta;
        const alerta = this.toas.create({
         title:"Aviso",
         subTitle: respuesta,
         buttons:["Aceptar"]
        });
  
        alerta.present();
      });
    }

    this.navCtrl.pop();
  }
  


}
