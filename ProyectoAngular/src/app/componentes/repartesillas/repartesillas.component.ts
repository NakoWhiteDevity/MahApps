import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';

@Component({
  selector: 'app-repartesillas',
  templateUrl: './repartesillas.component.html'
})
export class RepartesillasComponent{

  squadarray:any[] = [this._gj.squad.j1,this._gj.squad.j2,this._gj.squad.j3,this._gj.squad.j4];
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
