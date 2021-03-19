import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumemanoService{

  numemano:number = this.getnumemano();
  rerondaencambio:boolean = false;
  
  constructor(){}

  incrementarnumemano(){
    this.rerondaencambio = false;
    this.numemano++;
    localStorage.setItem('mano',`${this.numemano}`);
    localStorage.removeItem('plus');
  }

  getnumemano(){
    let retornable = JSON.parse(`${localStorage.getItem('mano')}`);
    if (retornable == undefined){
      return 1
    } else {
      return retornable;
    }
  }

}
