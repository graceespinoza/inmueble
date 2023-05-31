import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';import { Usuarios } from 'src/app/Model/Usuarios';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  pokemonSelect?:any;
 
  poke: any;
  userForm = new FormGroup({
  
    nombre: new FormControl('', [Validators.required]),
    celular: new FormControl('',[Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),

    rol: new FormControl('', [Validators.required]),

    contrasena: new FormControl('', [Validators.required]),

  });


  nombre: string=""; 
  celular: number=0; 
  cedula: number=0; 
  direccion: string=""; 
  email: string="";
  rol : string="";
  contrasena:string="";
  constructor(
   
    public userSer: UsuarioServiceService,
    private router: Router,
  ) { }


  ngOnInit(): void { }

  guardar(event: Event): void {
    event.preventDefault();
    console.log("1");
      const value = this.userForm.value;
      console.log(value)

      console.log("2");
        this.userSer.save(this.userForm.value).subscribe(resp => {
          console.log("3");
          this.userForm.reset();
          console.log(resp);
          debugger
      
      
        },
        error => {
          console.error(error)
        });
        
  
}
  
  
}
