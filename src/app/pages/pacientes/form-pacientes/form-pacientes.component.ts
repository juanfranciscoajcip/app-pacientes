import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/modelo/paciente';
import { ConsultaService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
  styleUrls: ['./form-pacientes.component.css']
})
export class FormPacientesComponent implements OnInit {
  
  @HostBinding('class') classes = "row";

  reg: Paciente = {
    idPaciente: '',
    nombres: '',
    apellidos: '',
    dni: '',
    direccion: '',
    telefono: ''
  }

  edit: boolean = false;

  constructor(private router:Router, private service:ConsultaService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log("Parametro");
    console.log(params);
    if (params.id){
      this.service.getPaciente(params.id)
        .subscribe(data=>{
            console.log("Respuesta getPaciente:")
            console.log(data)
            this.reg = data;
            this.edit = true;
        },
        err => console.error(err)
        
        )
    }
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

  actualizarPaciente(){
    //alert("Queriendo actualizar")
    console.log("Queriendo actualizar")
    console.log(this.reg.idPaciente)
    console.log(this.reg)

    this.service.actualizarPaciente(this.reg.idPaciente,this.reg)
    .subscribe(data=>{   
              console.log("Respuesta actualizar paciente:");
              console.log(data);      
              alert("Se actualizó con Éxito...!");
              this.router.navigate(["pacientes"]);
            },
            err => {
              console.log("Error actualizar paciente:");
              console.log(err);
            }
    )    

  }



}
