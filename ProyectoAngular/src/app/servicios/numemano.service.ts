import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumemanoService{

  numemano:number = 1;
  
  constructor(){}

  incrementarnumemano(){
    this.numemano++;
  }

}
