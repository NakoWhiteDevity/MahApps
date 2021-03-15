import { Injectable } from '@angular/core';
import { Form, FormControl , FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarformularioinicioService {

  constructor(){}

  sonValidos( objetodenombres:any , validezformulario:boolean ):boolean{
    let j1:string = objetodenombres.jugador1.toLowerCase(),
        j2:string = objetodenombres.jugador2.toLowerCase(),
        j3:string = objetodenombres.jugador3.toLowerCase(),
        j4:string = objetodenombres.jugador4.toLowerCase(),
        alljs = [j1,j2,j3,j4],
        valido:boolean = true;
    alljs.forEach( nombre => {
      let contador = 0;
      for (let acomparar of alljs){
        if (nombre === acomparar) {
          contador = contador + 1;
        }
      }
      if (contador > 1){
        valido = false;
      }
    })
    if (valido == true && validezformulario){ return true } else { return false };
  }

}
