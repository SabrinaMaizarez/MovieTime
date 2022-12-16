import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { IngresoComponent } from './components/ingreso/ingreso.component';
// import { AlumnoRutinasComponent } from './components/vista-alumno/alumno-rutinas/alumno-rutinas.component';


const routes: Routes = [
  // { path: 'alumn-cuotas', component: AlumnoCuotasComponent},
  // { path: 'check-rutinas/:id/:alumno', component: CheckRutinaComponent}
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
