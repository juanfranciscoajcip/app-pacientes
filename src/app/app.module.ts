import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//- Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//- Componentes
import { AppComponent } from './app.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { Page404Component } from './pages/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarComponent } from './pages/consultas/registrar/registrar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormPacientesComponent } from './pages/pacientes/form-pacientes/form-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    ConsultasComponent,
    Page404Component,
    NavbarComponent,
    RegistrarComponent,
    InicioComponent,
    FormPacientesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
