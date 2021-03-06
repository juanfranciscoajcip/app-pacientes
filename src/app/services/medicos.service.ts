import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  _url = 'http://localhost:8080/medicos'

  constructor(private http: HttpClient) { 
    console.log('Servicio Medicos');
  }

  getMedicos(){
    let header = new HttpHeaders()
//      .set('Type-content','aplication/json')

      return this.http.get(this._url, {
  //      headers: header
      });

  }

  insertMedicos() {
      let header = new HttpHeaders()

      let body = {
        nombres: "",
        apllidos: ""
      }

      return this.http.post(this._url, body, {
        
      })

  }
}