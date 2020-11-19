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


const routes: Routes = [
{path: '', component: AppComponent, pathMatch: 'full'},
{path: 'medico', component: MedicosComponent},
{path: 'login', component: LoginComponent},
{path: 'paciente', component: PacientesComponent},
{path: 'insertar-medico', component: InsertarMedicoComponent},
{path: 'examenes', component: ExamenesComponent},
{path: 'insertar-examen', component: InsertarExamenComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
