import { Component, Input } from '@angular/core';
import { Inmueble } from '../Model/Inmueble';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input() inmueble!: Inmueble;
}
