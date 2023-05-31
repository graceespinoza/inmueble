import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  exports:[

    HeaderComponent,
 
   
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
