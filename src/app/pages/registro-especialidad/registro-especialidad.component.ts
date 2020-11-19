import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from './../../services/especialidad.service';

@Component({
  selector: 'app-registro-especialidad',
  templateUrl: './registro-especialidad.component.html',
  styleUrls: ['./registro-especialidad.component.css']
})
export class RegistroEspecialidadComponent implements OnInit {
  public especialidades:Array<any> = [];
  nuevaEspecialidad: any = { identificador: 0, nombre: ''}

  constructor(private especialidadService: EspecialidadService) { }

  ngOnInit(){
  }

  obtenerEspecialidades(){
    this.especialidadService.getEspecialidades().subscribe((resp: any)=>{
      console.log(resp);
      this.especialidades = resp;
    }, 
      error => {
        console.log(JSON.stringify(error));
    });
  }

  registrarEspecialidad(){
    console.log('evento agregar especialidad:');
    console.log(this.nuevaEspecialidad);
    this.especialidadService.registrarEspecialidad(this.nuevaEspecialidad).subscribe(resp =>{
      this.obtenerEspecialidades();
    }, error => {
      console.log(JSON.stringify(error));
    });

  }

}
