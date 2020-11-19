import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  public m: Array<any> = []

  constructor(private ms: MedicoService) { 
    this.ms.getMedicos().subscribe((resp: any) => {
      console.log(resp);
      this.m = resp
    })
  }

  ngOnInit(): void {
  }

}
