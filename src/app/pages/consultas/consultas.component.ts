import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private consultaService:ConsultaService, private router:Router){

   this.getConsultas();
  }

  getConsultas(){
    // Funcion de tipo flech => 
    this.consultaService.getConsultas().subscribe((resp: any) => {
      console.log(resp);
      this.consultas = resp
    }) 
  }

  // Funciones para botones
  Listar(){
    this.router.navigate(["consultas"]);
  }
  Registrar(){
    this.router.navigate(["registrar"]);
  }
  RegistrarPaciente(){
    this.router.navigate(["form-pacientes"]);
  }
  

}
