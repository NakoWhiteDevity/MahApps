import { Component, OnInit, Input } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sindesc',
  templateUrl: './sindesc.component.html'
})
export class SindescComponent implements OnInit {

  //1,2,4,6,8,32
  
  @Input() jugadasReadonlyChild!:Chinaface;
  jugadascopia = this.jugadascopiasindesc();
  baraja:number[] = this.barajapuntos();
  
  constructor( private _jh:JsonhandlerService, public _c:CorrectorService ){}

  ngOnInit(): void {}

  jugadascopiasindesc():Chinaface[]{
    let caso:Chinaface[] = [];
    this._jh.jugadas.forEach(jugada => {
      if(jugada.detalles == ""){ caso.push(jugada) };
    });
    return caso;
  }

  barajapuntos():number[]{
    console.log(this.jugadasReadonlyChild);
    let arraypuntos:number[] = [1,2,4,6,8,32]; arraypuntos = _.shuffle(arraypuntos) ;
    let preguntarray:number[] = [jugada.puntos];
    let indice:number = arraypuntos.indexOf(jugada.puntos) ; arraypuntos.splice(indice,1);
    preguntarray.push(arraypuntos[0],arraypuntos[1],arraypuntos[2]) ; preguntarray = _.shuffle(preguntarray);
    return preguntarray;
  }

}
