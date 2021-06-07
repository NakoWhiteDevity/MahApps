import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../../modulos/jugador.class';

@Component({
  selector: 'app-repartesillas',
  templateUrl: './repartesillas.component.html'
})
export class RepartesillasComponent {

  squadarray:Jugador[] = [];
  jE:string = ""; jS:string = ""; jW:string = ""; jN:string = "";
  
  constructor( private _router:Router ) {
    this.squadarray = JSON.parse(`${localStorage.getItem('squad')}`);
    this.squadarray.forEach( jugador => {
      switch(jugador.arrayvientos[0]){
        case "E" : { this.jE = jugador.nombre;break; }
        case "S" : { this.jS = jugador.nombre;break; }
        case "W" : { this.jW = jugador.nombre;break; }
        case "N" : { this.jN = jugador.nombre;break; }
      }
    });
  }

  iraletrero(){
    this._router.navigate(['/letrero']);
  }

}
