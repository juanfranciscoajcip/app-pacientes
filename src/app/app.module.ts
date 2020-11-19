//- Comunes
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//- Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//- Componentes
import { AppComponent } from './app.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarComponent } from './pages/consultas/registrar/registrar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
//- Dinora
import { FormPacientesComponent } from './pages/pacientes/form-pacientes/form-pacientes.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import {​​ EspecialidadComponent }​​ from './pages/especialidad/especialidad.component';
import {​​ RegistroPacienteComponent}​​ from './pages/registro-paciente/registro-paciente.component';
import {​​ RegistroEspecialidadComponent}​​ from './pages/registro-especialidad/registro-especialidad.component';

//- Josue
import { MedicosComponent } from './pages/medicos/medicos.component';
import { InsertarMedicoComponent } from './pages/insertar-medico/insertar-medico.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { InsertarExamenComponent } from './pages/insertar-examen/insertar-examen.component';
//- Hector
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    LoginComponent,
    PacientesComponent,
    InsertarMedicoComponent,
    ExamenesComponent,
    InsertarExamenComponent,
    ConsultasComponent,
    Page404Component,
    NavbarComponent,
    RegistrarComponent,
    InicioComponent,
    PacienteComponent,
    FormPacientesComponent,
    EspecialidadComponent,
    RegistroPacienteComponent,
    RegistroEspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
