import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutas } from '../../assets/rutas';
import { Observable } from 'rxjs/observable';

/*
  Generated class for the CatalogosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatalogosProvider {

  private direccion:string = "";
  

  constructor(public http: HttpClient) {
     this.direccion = rutas.productos;
  }


  public getProductos():Observable<any>{
    return this.http.get(this.direccion);
  }


  public setProducto(obj):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    let json = JSON.stringify(obj);
    return this.http.post(this.direccion,json,httpOptions);
  }

  public putProducto(obj):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    let json = JSON.stringify(obj);
    return this.http.put(this.direccion+"/"+obj.id,json,httpOptions);
  }

  public deleteProducto(id):Observable<any>{

    return this.http.delete(this.direccion+"/"+id);
  }
  
}
