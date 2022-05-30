import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 10000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    },
    {
      nombre: 'Piccolo',
      poder: 8000
    }
  ];
  nuevo: Personaje = {
    nombre : 'Maestro Roshi',
    poder: 1000
  }
  
  
}
