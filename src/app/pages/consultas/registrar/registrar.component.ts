import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/modelo/consulta';
import { ConsultaService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @HostBinding('class') classes = "row";

  reg: Consulta = {
    idConsulta: 0,
    id_paciente: 0,
    id_medico: 0,
    id_especialidad: 0,
    num_consultorio: '',
    fecha: '2020-11-16',
    detalleConsulta: [{
      diagnostico: '',
      tratamiento: '',
  }]
  }

  constructor(private router:Router, private service:ConsultaService) {}

  ngOnInit(): void {
  }

  Guardar(){
    console.log("Reg:");
    console.log(this.reg);

    //Eliminar propiades que no requiere el servicio al guardar
    //delete this.reg.idPaciente;

    this.service.registrarConsulta(this.reg)
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
