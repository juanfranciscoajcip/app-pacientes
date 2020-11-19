import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = 'http://localhost:8080/usuario/'

  constructor(private http: HttpClient) { 
    console.log('Servicio Medicos');
  }

  getUsuario(id: String) {
      console.log('id: ' + id);
    return this.http.get(this._url + id, {
        
    });
  }

}