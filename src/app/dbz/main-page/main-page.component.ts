import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevoPersonaje: Personaje = {
    nombre : 'Maestro Roshi',
    poder: 1000
  }
  
 
}
