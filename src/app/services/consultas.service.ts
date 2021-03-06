import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Consulta } from '../modelo/consulta';
import { Pacientes } from '../modelo/pacientes';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  _url = 'http://localhost:8080/consultas'
  _urlp = 'http://localhost:8080/pacientes'
  
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

  registrarConsulta(consulta:Consulta){
    console.log('Registrando consulta');
    return this.http.post<Consulta>(this._url,consulta);
  }

  getPaciente(id:string){
    let header = new HttpHeaders()
    return this.http.get(this._urlp+"/"+id, {
    });

  }

  registrarPaciente(paciente:Pacientes){
    console.log('Registrando paciente');
    return this.http.post<Pacientes>(this._urlp,paciente);
  }

  actualizarPaciente(id:string, paciente:Pacientes){
    console.log('Actualizadno paciente');
    return this.http.post<Pacientes>(this._urlp,paciente);
  }


}
