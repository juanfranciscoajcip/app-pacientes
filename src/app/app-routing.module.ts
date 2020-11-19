import { PacienteComponent } from './pages/paciente/paciente.component';
import { RegistroEspecialidadComponent} from './pages/registro-especialidad/registro-especialidad.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { RegistroPacienteComponent} from './pages/registro-paciente/registro-paciente.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'pacientes', component: PacienteComponent},
  {path:'especialidades', component: EspecialidadComponent},
  {path: 'registroEspecialidad', component: RegistroEspecialidadComponent},
  {path:'registroPaciente', component: RegistroPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
