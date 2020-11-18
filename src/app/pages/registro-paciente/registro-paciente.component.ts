import { Component, OnInit } from '@angular/core';
import { PacientesService } from './../../services/pacientes.service';
import { Paciente } from 'src/app/modelo/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})

export class RegistroPacienteComponent implements OnInit {
  public pacientes:Array<any> = [];
  nuevoPaciente: Paciente  = { idPaciente: 21, nombres: '', apellidos: '',  dni: '', direccion: '', correo: '', telefono: ''}
  
  constructor(private router:Router, private pacienteService: PacientesService) { }

  ngOnInit(){
  }

  obtenerPacientes(){
    this.pacienteService.getPacientes().subscribe((resp: any)=>{
      this.pacientes = resp;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  registrarPaciente(){
    /*console.log('evento agregar');
    this.pacienteService.registrarPaciente(this.nuevoPaciente).subscribe(resp =>{
      this.obtenerPacientes();
    },
    error => {
      console.log(JSON.stringify(error));
    });*/

    console.log("Reg:");
    console.log(this.nuevoPaciente);

    //Eliminar propiades que no requiere el servicio al guardar
    //delete this.reg.idPaciente;

    this.pacienteService.registrarPaciente(this.nuevoPaciente)
    .subscribe(data=>{   
              console.log("Respuesta:");
              console.log(data);      
              alert("Se agregó con Éxito...!");
              this.router.navigate(["pacientes"]);
            },
            err => {
              console.log("Error:");
              console.log(err);
            }
    )
  }
}

