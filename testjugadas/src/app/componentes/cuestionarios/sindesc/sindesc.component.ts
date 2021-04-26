import { Component, OnInit, Input } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sindesc',
  templateUrl: './sindesc.component.html'
})
export class SindescComponent implements OnInit {

  //1,2,4,6,8,32
  
  jugada:Chinaface = this._tat.aiterar.jugada;
  jugadascopia = this.jugadascopiasindesc();
  baraja:number[] = this.barajapuntos();
  
  constructor( private _jh:JsonhandlerService, public _c:CorrectorService, private _tat: TestrastestService ){}

  ngOnInit(): void {}

  jugadascopiasindesc():Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach(jugada => {
      if(jugada.detalles == ""){ caso.push(jugada) };
    });
    return caso;
  }

  barajapuntos():number[]{
    let arraypuntos:number[] = [1,2,4,6,8,32]; arraypuntos = _.shuffle(arraypuntos) ;
    let preguntarray:number[] = [this.jugada.puntos];
    let indice:number = arraypuntos.indexOf(this.jugada.puntos) ; arraypuntos.splice(indice,1);
    preguntarray.push(arraypuntos[0],arraypuntos[1],arraypuntos[2]) ; preguntarray = _.shuffle(preguntarray);
    console.log(preguntarray);
    return preguntarray;
  }

}
