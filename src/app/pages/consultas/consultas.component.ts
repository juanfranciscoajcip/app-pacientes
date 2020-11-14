import { Component } from '@angular/core';
import { ConsultaService } from './../../services/consultas.service';

@Component({
  selector: 'consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  title = 'Consultas Médicas';

  //Declaracion de variables
  public consultas: Array<any> = []

  // Inyectar servicio con el método constructor
  constructor(private consultaService:ConsultaService){

    // Funcion de tipo flech => 
    this.consultaService.getConsultas().subscribe((resp: any) => {
      console.log(resp);
      this.consultas = resp
    })


  }
  

}
