import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManosplusService{

  manosplus:string[] = this.getplus();
  
  constructor() { }

  getplus(){
    let retornable = localStorage.getItem('plus')?.split(",");
    if (retornable == undefined){
      return [];
    } else {
      return retornable;
    }
  }

}
