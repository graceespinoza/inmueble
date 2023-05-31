import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { SignupComponent } from './page/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservaComponent } from './page/reserva/reserva.component';
import { UserComponent } from './principal/user/user.component';
import { AsesorComponent } from './page/asesor/asesor.component';
import { ListadoComponent } from './listado/listado.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { InmuebleModule } from './page/inmueble/inmueble.module';
import { ListComponent } from './page/reserva/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    
    ReservaComponent,
    UsuariosComponent,
    SignupComponent,
    UserComponent,
    AsesorComponent,
    ListadoComponent,
    
    LayoutComponent,
    NavComponent,
    ListComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InmuebleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
