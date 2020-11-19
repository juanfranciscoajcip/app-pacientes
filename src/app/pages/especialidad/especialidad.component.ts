import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from './../../services/especialidad.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent{
  title = 'especialidad';
  public especialidades:Array<any> = [];

  constructor(private especialidadService: EspecialidadService) {
    this.obtenerEspecialidades();
   }

  obtenerEspecialidades(){
    this.especialidadService.getEspecialidades().subscribe((resp: any)=>{
      console.log("Respuesta obtenerEspecialidades:");
      console.log(resp)
      this.especialidades = resp;
    }, 
      error => {
        console.log("Error obtenerEspecialidades:");
        console.log(JSON.stringify(error));
    });
  }

   ngOnInit(){

  }

  eliminarEspecialidad(identificador){
    console.log('evento eliminar');
    this.especialidadService.eliminarEspecialidad(identificador).subscribe(resp => {
      this.obtenerEspecialidades();
    },
    error => {
      console.log(JSON.stringify(error));
    })

  }

}
