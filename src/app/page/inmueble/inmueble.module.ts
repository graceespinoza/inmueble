import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { InmuebleComponent } from './component/inmueble/inmueble.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
  declarations: [
    InmuebleComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    ReactiveFormsModule
  ]
})
export class InmuebleModule { }
