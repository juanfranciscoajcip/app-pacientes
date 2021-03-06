import { Component } from '@angular/core';
import { JsonService } from './../../json.service';
import { PacientesService } from './../../services/pacientes.service';
import { Router } from '@angular/router';

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
  constructor(private pacientesService:PacientesService, private router:Router){
    this.getPacientes();
  }

  getPacientes(){
       // Funcion de tipo flech => 
       this.pacientesService.getPacientes().subscribe((resp: any) => {
        console.log(resp);
        this.pacientes = resp
      }) 
  }

  editarPaciente(id: string){
    console.log(id);
    this.router.navigate(["form-pacientes/editar/",id]);
 
  }  
    
}
