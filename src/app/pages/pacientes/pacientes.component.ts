import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

public pacientes: Array<any> = []
  
constructor(private pacientesService:PacientesService) {

    // Funcion de tipo flech => 
    this.pacientesService.getPacientes().subscribe((resp: any) => {
      console.log(resp);
      this.pacientes = resp
    })
  }

  ngOnInit(): void {
  }

}
