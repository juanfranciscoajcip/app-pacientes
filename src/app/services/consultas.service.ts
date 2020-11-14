import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  _url = 'http://localhost:8080/consultas'

  constructor(private http: HttpClient) { 
    console.log('Servicio Consultas');
  }

  getConsultas(){
    let header = new HttpHeaders()
//      .set('Type-content','aplication/json')

      return this.http.get(this._url, {
  //      headers: header
      });

  }
}
