import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import {​​ PacienteComponent }​​ from './pages/paciente/paciente.component';
import {​​ EspecialidadComponent }​​ from './pages/especialidad/especialidad.component';
import {​​ RegistroPacienteComponent}​​ from './pages/registro-paciente/registro-paciente.component';
import {​​ RegistroEspecialidadComponent}​​ from './pages/registro-especialidad/registro-especialidad.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'medico', component: MedicosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'pacientes', component: PacientesComponent},
  {​​path: 'especialidades', component: EspecialidadComponent}​​,
  {​​path: 'registroEspecialidad', component: RegistroEspecialidadComponent}​​,
  {​​path: 'registroPaciente', component: RegistroPacienteComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
