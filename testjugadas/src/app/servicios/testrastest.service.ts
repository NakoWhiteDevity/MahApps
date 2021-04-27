import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { JsonhandlerService } from './jsonhandler.service';
import { iteface } from 'src/app/interfaces/chinaface';

@Injectable({
  providedIn: 'root'
})
export class TestrastestService {

  indice:number[] = this.crearindice();
  random:number[] = this.crearrandoms();
  //Desactivando la linea de shuffle de crear índice, que el aleatoriador de en caso de haber descripción reciba directamente el componente, y apuntando desde el índice la jugada, podemos comprobar los componentes uno a uno mi rey.
  aiterar:iteface = this.iterador(this.indice[0]);

  constructor( private _jh:JsonhandlerService ){}

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  crearrandoms():number[]{
    let randoms:number[] = [];
    for(let n = 1 ; n <= 100 ; n++){
      randoms.push(_.random(1,3));
    }
    return randoms;
  }

  //Recuerda que ya no esta implantado esta funcion en el main:
  pasarsiguiente(){
    this.indice.shift(); this.random.shift();
    if(this.indice.length == 22){ this.indice = this.crearindice() };
    if(this.random.length == 2){ this.random = this.crearrandoms() };
  }

  iterador(i:number):iteface{
    
    const haydetalles = (detalles:string):boolean =>{
      if (detalles == "") { return false } else { return true };
    }
    
    let caso = {
      jugada:this._jh.jugadas[i],
      caso: haydetalles(this._jh.jugadas[i].detalles)
    }

    return caso;
  
  }


}
