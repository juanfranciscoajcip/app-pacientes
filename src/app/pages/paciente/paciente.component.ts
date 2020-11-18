import { Component, OnInit } from '@angular/core';
import { PacientesService } from './../../services/pacientes.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent{
  title = 'paciente';
  public pacientes:Array<any> = [];
  nuevoPaciente: any = { nombres: '', apellidos: '', direccion: '', dni: '', correo: '', telefono: ''}

  constructor(private pacienteService: PacientesService){
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this.pacienteService.getPacientes().subscribe((resp: any)=>{
      this.pacientes = resp;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }
  
  ngOnInit(){

  }

  registrarPaciente(){
    console.log('evento agregar');
    this.pacienteService.registrarPaciente(this.nuevoPaciente).subscribe(resp =>{
      this.obtenerPacientes();
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  eliminarPaciente(identificador){
      console.log('evento eliminar');
      this.pacienteService.eliminarPaciente(identificador).subscribe(resp =>{
        this.obtenerPacientes();
      },
      error => {
        console.log(JSON.stringify(error));
      });
  }
}

