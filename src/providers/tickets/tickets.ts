import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rutas } from '../../assets/rutas';
import { Observable } from 'rxjs/observable';

/*
  Generated class for the TicketsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketsProvider {
  private direccion: string = "";


  constructor(public http: HttpClient) {
    this.direccion = rutas.tickets;
  }


  public gets(cobrado): Observable<any> {
    return this.http.get(this.direccion + "/" + cobrado);
  }
  public getsDetalleAgrupado(id): Observable<any> {
    return this.http.get(this.direccion + "/detalle/agrupado/" + id);
  }


  public insertar(obj): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let json = JSON.stringify(obj);
    return this.http.post(this.direccion, json, httpOptions);
  }

  public insertarDetalle(obj): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let json = JSON.stringify(obj);
    return this.http.post(this.direccion + "/detalle", json, httpOptions);
  }


  public cobrarTicket(obj): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let json = JSON.stringify(obj);
    return this.http.put(this.direccion+"/cobrado",json,httpOptions);
  }

  public cancelar(id): Observable<any>{
      return this.http.delete(this.direccion+"/cancelar/"+id);
  }
}
