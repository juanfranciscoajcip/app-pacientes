import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//- Componentes
import { AppComponent } from './app.component';
import { PacientesComponent} from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { RegistrarComponent } from './pages/consultas/registrar/registrar.component';
import { Page404Component } from './pages/page404/page404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormPacientesComponent } from './pages/pacientes/form-pacientes/form-pacientes.component';

const routes: Routes = [
  { path:'', component: InicioComponent},  
  { path:'pacientes', component: PacientesComponent},
  { path:'consultas', component: ConsultasComponent},
  { path:'registrar', component: RegistrarComponent},
  { path:'form-pacientes', component: FormPacientesComponent},
  { path:'form-pacientes/editar/:id', component: FormPacientesComponent},
  
  { path:'**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
