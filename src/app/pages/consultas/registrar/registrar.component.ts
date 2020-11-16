import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/modelo/consulta';
import { Paciente } from 'src/app/modelo/paciente';
import { ConsultaService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @HostBinding('class') classes = "row";

  reg: Paciente = {
    idPaciente: 0,
    nombres: '',
    apellidos: '',
    dni: '',
    direccion: '',
    telefono: ''
  }

  constructor(private router:Router, private service:ConsultaService) {}

  ngOnInit(): void {
  }

  Guardar(){
    console.log("Reg:");
    console.log(this.reg);

    //Eliminar propiades que no requiere el servicio al guardar
    //delete this.reg.idPaciente;

    this.service.registrarPaciente(this.reg)
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
