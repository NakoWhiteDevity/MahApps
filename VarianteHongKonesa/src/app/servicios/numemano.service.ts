import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumemanoService{

  numemano:number = this.getnumemano();
  
  constructor(){}

  incrementarnumemano(){
    this.numemano++;
    localStorage.setItem('mano',`${this.numemano}`);
    localStorage.removeItem('plus');
  }

  getnumemano(){
    let retornable = JSON.parse(`${localStorage.getItem('mano')}`);
    if (retornable == undefined){
      return 4
    } else {
      return retornable;
    }
  }

}
