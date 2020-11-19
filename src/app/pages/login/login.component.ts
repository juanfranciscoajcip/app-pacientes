import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;

  constructor(private ls:LoginService, private formBuilder: FormBuilder, private _router: Router) { 
    this.loginform = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login');
    console.log('id: ' + this.loginform.controls['user'].value);
    this.ls.getUsuario(this.loginform.controls['user'].value)
    .subscribe(
      x => {
        const jsonValue = JSON.stringify(x);
        var valueFromJson = JSON.parse(jsonValue);
        const cl = (valueFromJson || {}).password;

        if(this.loginform.controls['password'].value == cl){
          console.log('Bienvenido');
          alert('Bienvenido');
          this._router.navigate(['pacientes']);
        } else {
          console.log('El usuario o contraseña no son correctos.');
          alert('El usuario o contraseña no son correctos.');
        }

      }
      ,
      err =>{
        console.error('Observer got an error: ' + err);
        alert('NO existe ese usuario');
      }, 
      () => {
        console.log('Observer got a complete notification');
        //alert('NO existe ese usuario');
      }
    )
  }

}
