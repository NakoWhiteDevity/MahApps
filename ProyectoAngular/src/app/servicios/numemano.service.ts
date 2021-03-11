import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NumemanoService {

  numemano:number = 15;
  
  constructor(private _router : Router) { }

  incrementarnumemano(){
    this.numemano++;
    if(this.numemano == 17){
      this._router.navigate(['/findejuego']);
    } else {
      this._router.navigate(['/letrero']);
    }
  }

}
