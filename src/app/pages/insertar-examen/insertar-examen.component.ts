import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-insertar-examen',
  templateUrl: './insertar-examen.component.html',
  styleUrls: ['./insertar-examen.component.css']
})
export class InsertarExamenComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private es: ExamenesService) { }
  ngOnInit(): void {
  }
  oninsert() {
    let body = {
      idExamen: 0,
      nombres: this.profileForm.controls['name'].value,
      descripcion: this.profileForm.controls['description'].value,
    }
    this.es.insertExamenes(body).subscribe((resp: any) => {
      console.log(resp);
    })


  }

}

