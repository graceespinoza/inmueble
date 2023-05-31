import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent } from './component/inmueble/inmueble.component';
import { NavComponent } from '../../nav/nav.component';
import { RegistrarComponent } from './registrar/registrar.component';
const routes: Routes = [
  
  {
    path:'',
  component:NavComponent
  },
  {
    path:'inmueble',
    component:InmuebleComponent,
  },
  {
    path:'registrar',
    component:RegistrarComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
