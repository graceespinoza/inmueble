import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Inmueble } from '../../../../Model/Inmueble';
import { Usuarios } from 'src/app/Model/Usuarios';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { InmuebleService } from 'src/app/Service/inmueble.service';
@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})

export class InmuebleComponent implements OnInit {
  pokemonSelect?: any;
  inmubsd!: FormGroup;
  usuarios: Usuarios[] = [];
  poke?: any;


  constructor(
    public fb: FormBuilder,
    public inmSer: InmuebleService,
    private router: Router,
    public usuariServi: UsuarioServiceService
  ) {
    this.cargarCategorias();
  }
  async ngOnInit(): Promise<void> {
    this.inmubsd = this.fb.group({
      id_inmueble: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      precio: ['', Validators.required],
      estado: ['', Validators.required],
      tipo_inmuble: ['', Validators.required],     
      usuarios: ['', Validators.required],
    });
   
    await this.inmSer.obtener().subscribe(resp => {
    
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
      console.log(resp)
    }, error => {
      console.error(error)
    })
  }

  REGISTRAR(event: Event): void {
    event.preventDefault();
    const inmu: Inmueble = this.inmubsd.value;
    this.inmSer.save(this.inmubsd.value).subscribe(resp => {
      this.inmubsd.reset();
      this.poke.push(resp);
    },
      error => {
        console.error(error)
      }
    )
  }


  update(usuar: any) {
    this.inmubsd.patchValue({
      id_inmueble: usuar.id_inmueble,
      nombre: usuar.nombre,
      direccion: usuar.direccion,
      precio: usuar.precio,
      estado:usuar.estado,
      tipo_inmueble: usuar.tipo_inmueble,
      usuarios: usuar.usuarios

    })
    this.pokemonSelect = usuar;
    console.log("pokemonSelect", this.pokemonSelect);

  }
  delete(usuar: any) {
    this.inmSer.delete(usuar.id_inmueble).subscribe(resp => {
      console.log(resp)
      if (resp === true) {
        this.poke.pop(usuar)
      }
    })
  }

}
