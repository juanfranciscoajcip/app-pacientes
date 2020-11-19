import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { InsertarExamenComponent } from './pages/insertar-examen/insertar-examen.component';
import { InsertarMedicoComponent } from './pages/insertar-medico/insertar-medico.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import {​​ PacienteComponent }​​ from './pages/paciente/paciente.component';
import {​​ EspecialidadComponent }​​ from './pages/especialidad/especialidad.component';
import {​​ RegistroPacienteComponent}​​ from './pages/registro-paciente/registro-paciente.component';
import {​​ RegistroEspecialidadComponent}​​ from './pages/registro-especialidad/registro-especialidad.component';

//- Componentes
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { RegistrarComponent } from './pages/consultas/registrar/registrar.component';
import { Page404Component } from './pages/page404/page404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormPacientesComponent } from './pages/pacientes/form-pacientes/form-pacientes.component';


const routes: Routes = [
  { path:'', component: LoginComponent},  
//  {path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'medico', component: MedicosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'paciente', component: PacienteComponent},
  { path: 'pacientes', component: PacientesComponent},
  { ​​path: 'especialidades', component: EspecialidadComponent}​​,
  { ​​path: 'registroEspecialidad', component: RegistroEspecialidadComponent}​​,
  { ​​path: 'registroPaciente', component: RegistroPacienteComponent},  
  { path: 'insertar-medico', component: InsertarMedicoComponent},
  { path: 'examenes', component: ExamenesComponent},
  { path: 'insertar-examen', component: InsertarExamenComponent},
  { path: 'pacientes', component: PacientesComponent},
  { path: 'consultas', component: ConsultasComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'form-pacientes', component: FormPacientesComponent},
  { path: 'form-pacientes/editar/:id', component: FormPacientesComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
