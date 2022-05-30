import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable({
    providedIn: "root"
})
export class DbzService {

   private  _listaPersonajes: Personaje[] = [
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

      get listaPersonajes(){
          return [...this._listaPersonajes];

      }

      agregarNuevoPersonaje( argumento: Personaje ){
        console.log(argumento);
        this._listaPersonajes.push(argumento);
    
      }



     

}