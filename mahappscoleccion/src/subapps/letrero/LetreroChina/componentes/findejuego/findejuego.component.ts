import { Component, OnInit } from '@angular/core';
import { GenerarjugadoresService } from '../../servicios/generarjugadores.service';

@Component({
  selector: 'app-findejuego',
  templateUrl: './findejuego.component.html',
})
export class FindejuegoComponent implements OnInit {

  squad:any;
  ganador:string = "";
  
  constructor( private _gj:GenerarjugadoresService){}

  ngOnInit(): void {
    let finstorage = JSON.parse(`${localStorage.getItem('squadfin')}`);
    if(finstorage == null){
      this.squad = this._gj.squadfin;
      localStorage.setItem('squadfin',JSON.stringify(this.squad));
    } else {
      this.squad = finstorage;
    }
    this.ganador = this.squad[0].nombre;
  }

}
