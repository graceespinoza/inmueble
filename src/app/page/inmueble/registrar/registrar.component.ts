import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Model/Usuarios';
import { Inmueble } from 'src/app/Model/Inmueble';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{

  pokemonSelect?: any;
  inmuForm!: FormGroup;
  usuarios: Usuarios[] = [];
  poke: any;


  constructor(
    public fb: FormBuilder,
    public inmuebleService: InmuebleService,
    private router: Router,
    public usuariServi: UsuarioServiceService
  ) {
    this.cargarCategorias();
  }
  ngOnInit(): void {
    this.inmuForm = this.fb.group({
      id_inmueble: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      tipo_inmuble: ['', Validators.required],
      usuarios: ['', Validators.required],
    });;
    
    this.inmuebleService.obtener().subscribe(resp => {
      this.poke = resp;
      console.log(resp);
    },
      error => {
        console.error(error);
      }

    )
  }
  cargarCategorias() {
    this.usuariServi.obtener().subscribe(resp => {
      this.usuarios = resp;
    }, error => {
      console.error(error)
    })
  }



  guardar(event: Event): void {
    event.preventDefault();
    debugger
    const inmu: Inmueble = this.inmuForm.value;
    debugger
    this.inmuebleService.save(this.inmuForm.value).subscribe(resp =>{
      debugger
      this.inmuForm.reset();
      debugger
      this.poke.push(resp);
    
    },
      error => {
        console.error(error)
      });
  }



}

