import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-insertar-medico',
  templateUrl: './insertar-medico.component.html',
  styleUrls: ['./insertar-medico.component.css']
})
export class InsertarMedicoComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    cmp: new FormControl('')
  });
  constructor(private ms:MedicoService) { }
  ngOnInit(): void { 
  }
  oninsert() {
    let body = {
      nombres: this.profileForm.controls['name'].value,
      apellidos: this.profileForm.controls['lastname'].value,
      cmp: this.profileForm.controls['cmp'].value
    }
    this.ms.insertMedicos(body).subscribe((resp: any) => {
      console.log(resp);
    })


  }

}
