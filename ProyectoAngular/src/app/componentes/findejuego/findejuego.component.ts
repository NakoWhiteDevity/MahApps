import { Component, OnInit } from '@angular/core';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';

@Component({
  selector: 'app-findejuego',
  templateUrl: './findejuego.component.html',
})
export class FindejuegoComponent implements OnInit {

  squad:any
  
  constructor( private _gj:GenerarjugadoresService) { }

  ngOnInit(): void {
    this.squad = this._gj.squadfin;
  }

}
