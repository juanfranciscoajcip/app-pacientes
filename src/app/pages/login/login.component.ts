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
        console.log('user: '+JSON.stringify(x));
        var us = x.json();
        console.log('pass: '+us.clave);
        
        this._router.navigate(['pacientes']);
      }
      ,
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    )
  }

}
