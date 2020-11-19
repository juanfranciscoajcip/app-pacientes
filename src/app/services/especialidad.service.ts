import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  _url = 'http://localhost:8080/especialidades'

  constructor(private http:HttpClient) { 
    console.log('Servicio especialidades')
  }

  getEspecialidades(){
    let header = new HttpHeaders()
    return this.http.get(this._url, {

    });
  }

  registrarEspecialidad(especialidad: any){
    let json = JSON.stringify(especialidad);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this._url, json, {headers: header});
  }

  eliminarEspecialidad(identificador){
    return this.http.delete(this._url + "/" + identificador);
  }
}
