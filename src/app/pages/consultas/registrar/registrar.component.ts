import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/modelo/consulta';
import { ConsultaService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private router:Router, private service:ConsultaService) {}

  ngOnInit(): void {
  }

  Guardar(consulta:Consulta){
    console.log("Parametro consulta:");
    console.log(consulta);

    alert("Queriendo guardar");

    this.service.registrarConsulta(consulta)
    .subscribe(data=>{
      alert("Se agregó con Éxito...!");
      //this.router.navigate(["consultas"]);
    })

  }

}
