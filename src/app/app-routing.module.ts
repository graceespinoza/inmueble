import { RegistrarComponent } from './page/inmueble/registrar/registrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { ReservaComponent } from './page/reserva/reserva.component';

import { InmuebleComponent } from './page/inmueble/component/inmueble/inmueble.component';
import { UserComponent } from './principal/user/user.component';
import { AsesorComponent } from './page/asesor/asesor.component';
import { ListadoComponent } from './listado/listado.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './page/reserva/list/list.component';

const routes: Routes = [
 
  {
    path:'',
    component:NavComponent,
  },
  {
    path:'singup',
    component:SignupComponent,
  },
  {
    path:'reserva',
    component:ReservaComponent,
  },
  {
    path:'inmueble',
    component:InmuebleComponent,
  },
  {
    path:'user',
    component:UsuariosComponent,
  },
  {
    path:'registrar',
    component:RegistrarComponent,
  },
  {
    path:'principal',
    component: UserComponent,
  },
  {
    path:'asesor',
    component: AsesorComponent,
  },
  
  {path: 'listare', component: ListComponent
  },
  {
    path:'list',
    component:ListadoComponent ,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
