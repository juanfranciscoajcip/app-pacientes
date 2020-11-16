import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Consulta } from '../modelo/consulta';
import { Paciente } from '../modelo/paciente';

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

  registrarPaciente(paciente:Paciente){
    console.log('Registrando consulta');
    return this.http.post<Paciente>(this._urlp,paciente);
  }


}
