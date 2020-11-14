import { Component } from '@angular/core';
import { JsonService } from './../../json.service';
import { PacientesService } from './../../services/pacientes.service';

@Component({
  selector: 'pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  title = 'app-pacientes';

  //Declaracion de variables
  public pacientes: Array<any> = []

  //- Forma simple
  //constructor(public json: JsonService) {
  //  this.json.getJson('http://localhost:8080/pacientes').subscribe((res: any) => {
  //    console.log(res);
  //  });
  //}

  // Inyectar servicio con el método constructor
  constructor(private pacientesService:PacientesService){

    // Funcion de tipo flech => 
    this.pacientesService.getPacientes().subscribe((resp: any) => {
      console.log(resp);
      this.pacientes = resp
    })
  }
    
}