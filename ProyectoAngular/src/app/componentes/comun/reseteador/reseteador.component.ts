import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';

@Component({
  selector: 'app-reseteador',
  templateUrl: './reseteador.component.html',
})
export class ReseteadorComponent implements OnInit {

  constructor( private _router:Router , private _gj:GenerarjugadoresService) { }

  ngOnInit(): void {
  }

  borrarcheck(){
    let pop = confirm("¿Desea borrar la partida y comenzar una nueva?")
    if(pop == true){
      this._gj.nukeStorage();
      this._router.navigate(['/forinicio']);
    } else {
      return
    }

  }

}
