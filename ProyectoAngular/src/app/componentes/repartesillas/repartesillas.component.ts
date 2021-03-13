import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { Jugador } from 'src/app/modulos/jugador.class';

@Component({
  selector: 'app-repartesillas',
  templateUrl: './repartesillas.component.html'
})
export class RepartesillasComponent{

  squadarray:Jugador[] = [this._gj.squad[0],this._gj.squad[1],this._gj.squad[2],this._gj.squad[3]];
  jE:string = ""; jS:string = ""; jW:string = ""; jN:string = "";
  
  constructor( private _gj:GenerarjugadoresService , private _router:Router ) {
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
