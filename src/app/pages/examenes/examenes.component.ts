import { Component, OnInit } from '@angular/core';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  public e: Array<any> = []
  
  constructor(private es: ExamenesService) {
  
      // Funcion de tipo flech => 
      this.es.getExamenes().subscribe((resp: any) => {
        console.log(resp);
        this.e = resp
      })
    }
  
    ngOnInit(): void {
    }
  
  }
