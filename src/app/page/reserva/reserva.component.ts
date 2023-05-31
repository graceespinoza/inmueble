import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/Model/Inmueble';
import { Reserva } from 'src/app/Model/Reserva';
import { InmuebleService } from 'src/app/Service/inmueble.service';
import { ReservaService } from 'src/app/Service/reserva.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  inmub:Inmueble[]=[];

  poke:any;
  pokemonSelect?:any;
  reserForm = new FormGroup({
  
    tipo: new FormControl ('', [Validators.required]),
    estado: new FormControl ('', [Validators.required]),
    hora: new FormControl ('', [Validators.required]),
    fecha: new FormControl ('', [Validators.required]),
    inmueble: new FormControl ('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
  });

      tipo:string="";
      estado:string="";
      hora:string="";
      fecha:string="";
      inmueble:string="";
      usuario:string="";
  constructor(
 
    public reseSer: ReservaService,
    private router: Router,
    public inmSer: InmuebleService,
   
  ) {this.cargarCategorias()}
   

    ngOnInit(): void {
     
    }
    cargarCategorias() {
      this.inmSer.obtener().subscribe(resp => {
        this.inmub = resp;
      }, error => {
        console.error(error)
      })
    }
   

    guardar(event: Event): void {
      event.preventDefault();
    
      const rese = this.reserForm.value;
      debugger
      console.log(this.reserForm.value);
      debugger  
      this.reseSer.save(this.reserForm.value).subscribe(resp=>{
        debugger 
        this.reserForm.reset();
        
      },
      error =>{
        console.error(error);
      }
      
     
      )
    }

    
  update(rese:any){
    this.reserForm.patchValue({

     
      tipo: rese.tipo,
      estado: rese.estado,
      hora: rese.hora,
      fecha: rese.fecha,
      inmueble: rese.inmueble,
      usuario: rese.usuario,
    

    })
    this.pokemonSelect =rese;
   console.log("pokemonSelect" , this.pokemonSelect);
  
   }
   delete(rese: any) {
     this.reseSer.delete(rese.id_reserva).subscribe(resp => {
       console.log(resp)
       if (resp === true) {
         this.poke.pop(rese)
       }
     })
   }
}
