import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Model/Usuarios';
@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {
  pokemonSelect?: any;
  usuarios: Usuarios[] = [];
  poke: any;
  userForm = new FormGroup({

    nombre: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),

  });


  nombre: string = "";
  celular: number = 0;
  cedula: number = 0;
  direccion: string = "";
  email: string = "";
  rol: string = "";
  contrasena: string = "";
  constructor(
    public fb: FormBuilder,
    public userSer: UsuarioServiceService,
    private router: Router,

  ) { }

  async ngOnInit(): Promise<void> {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });

    await this.userSer.obtener().subscribe(resp => {
      this.poke = resp;

      console.log(resp);
    },
      error => {
        console.error(error);
      }

    )
  }

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
  update(usuar: any) {
    this.userForm.patchValue({
      nombre: usuar.nombre,
      celular: usuar.celular,
      email: usuar.email,
      contrasena: usuar.contrasena

    })
    this.pokemonSelect = usuar;
    console.log("pokemonSelect", this.pokemonSelect);

  }
  delete(usuar: Usuarios) {
    console.log(usuar)
    this.userSer.delete(usuar.codigo).subscribe(resp => {
      console.log(resp)
      if (resp === true) {
        this.poke.pop(usuar)
      }
    })
  }

}
