import { Component, OnChanges, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { CorrectorService } from 'src/app/servicios/corrector.service';
import { TestrastestService } from 'src/app/servicios/testrastest.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sindesc',
  templateUrl: './sindesc.component.html'
})
export class SindescComponent implements OnInit{

  //1,2,4,6,8,32
  
  jugada:Chinaface = this._tat.aiterar.jugada;
  baraja:number[] = this.barajapuntos();
  
  constructor( public _c:CorrectorService, private _tat: TestrastestService ){
    this._tat.obsjugada$.subscribe(resp => this.jugada = resp.jugada);
  }

  ngOnInit(): void {}

  barajapuntos():number[]{
    let arraypuntos:number[] = [1,2,4,6,8,32]; arraypuntos = _.shuffle(arraypuntos) ;
    let preguntarray:number[] = [this.jugada.puntos];
    let indice:number = arraypuntos.indexOf(this.jugada.puntos) ; arraypuntos.splice(indice,1);
    preguntarray.push(arraypuntos[0],arraypuntos[1],arraypuntos[2]) ; preguntarray = _.shuffle(preguntarray);
    return preguntarray;
  }

}
