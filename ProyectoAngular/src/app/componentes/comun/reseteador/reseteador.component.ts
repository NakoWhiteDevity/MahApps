import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';

@Component({
  selector: 'app-reseteador',
  templateUrl: './reseteador.component.html',
})
export class ReseteadorComponent{

  constructor( private _router:Router , private _gj:GenerarjugadoresService) { }

  borrarcheck(){
    let pop = confirm("¿Desea borrar la partida y comenzar una nueva?")
    if(pop == true){
      localStorage.setItem('nuke',"true");
      this._router.navigate(['/forinicio']);
      //window.location.reload();
    } else {
      return
    }

  }

}
