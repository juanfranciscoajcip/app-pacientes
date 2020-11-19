import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { LoginComponent } from './pages/login/login.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { InsertarMedicoComponent } from './pages/insertar-medico/insertar-medico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { InsertarExamenComponent } from './pages/insertar-examen/insertar-examen.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    LoginComponent,
    PacientesComponent,
    InsertarMedicoComponent,
    ExamenesComponent,
    InsertarExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
