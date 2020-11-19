import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Paciente } from '../modelo/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  _url = 'http://localhost:8080/pacientes'

  constructor(private http: HttpClient) { 
    console.log('Servicio Pacientes');
  }

  getPacientes(){
    let header = new HttpHeaders()
    return this.http.get(this._url, { 
      
    });
  }

  registrarPaciente(paciente: Paciente){
    //let json = JSON.stringify(paciente);
    //let header = new HttpHeaders().set('Content-Type', 'application/json');
    //return this.http.post(this._url, json, { headers: header });
    console.log('Registrando paciente');
    return this.http.post<Paciente>(this._url, paciente);
  }

  eliminarPaciente(identificador){
    return this.http.delete(this._url + "/" + identificador);
  }

  eliminaPaciente(){
    let header = new HttpHeaders()
    return this.http.put(this._url, {
      //      headers: header
          });    
  }

}
