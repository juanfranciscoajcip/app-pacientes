import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { RegistroEspecialidadComponent } from './pages/registro-especialidad/registro-especialidad.component';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadComponent,
    PacienteComponent,
    RegistroEspecialidadComponent,
    RegistroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
