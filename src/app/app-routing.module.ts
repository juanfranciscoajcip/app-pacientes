import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//- Componentes
import { AppComponent } from './app.component';
import { PacientesComponent} from './pages/pacientes/pacientes.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path:'', component: AppComponent},  
  { path:'pacientes', component: PacientesComponent},
  { path:'consultas', component: ConsultasComponent},
  { path:'**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
