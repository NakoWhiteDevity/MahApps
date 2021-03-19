import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumemanoService{

  numemano:number = 1;
  
  constructor(){}

  incrementarnumemano(){
    let viejamano = JSON.parse(`${localStorage.getItem('mano')}`);
    localStorage.setItem('mano',`${viejamano + 1}`);
  }

}
