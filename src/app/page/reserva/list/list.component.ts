import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/Model/Inmueble';
import { Usuarios } from 'src/app/Model/Usuarios';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { ReservaService } from 'src/app/Service/reserva.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  pokemonSelect?: any;
  inmubsd!: FormGroup;
  inmueble: Inmueble[] = [];
  poke?: any;


  constructor(
    public fb: FormBuilder,
    public inmSer: ReservaService,
    private router: Router,
    public usuariServi : UsuarioServiceService,
    public inmuebService : InmuebleService

  ) {
    this.cargarCategorias();
  }
   ngOnInit(): void {
    this.inmubsd = this.fb.group({
      id_reserva: ['', Validators.required],
      tipo: ['', Validators.required],
      estado: ['', Validators.required],
      hora: ['', Validators.required],
      fecha: ['', Validators.required],
      inmueble: ['', Validators.required],     
      usuarios: ['', Validators.required],
    });
   
     this.inmSer.obtener().subscribe(resp => {
    
      this.poke = resp;

      console.log(resp);
    },
      error => {
        console.error(error);
      }

    )
  }
  cargarCategorias() {
    this.inmuebService.obtener().subscribe(resp => {
      
      this.inmueble = resp;
      console.log(resp)
    }, error => {
      console.error(error)
    })
  }

  REGISTRAR(event: Event): void {
    event.preventDefault();
    const Reserva = this.inmubsd.value;
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
      id_reserva: usuar.id_reserva,
      estado: usuar.estado,
      hora: usuar.hora,
      fecha: usuar.fecha,
      inmueble:     usuar.inmueble,
      usuarios: usuar.usuarios,


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
