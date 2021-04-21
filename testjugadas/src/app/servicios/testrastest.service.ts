import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class TestrastestService {

  indice:number[] = this.crearindice();
  
  constructor(){}

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  pasarsiguiente(){
    this.indice.shift();
    if(this.indice.length == 22){ this.indice = this.crearindice() };
  }


}
