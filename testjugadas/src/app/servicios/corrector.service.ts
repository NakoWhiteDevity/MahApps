import { Injectable } from '@angular/core';
import { Chinaface,correface } from '../interfaces/chinaface';
import { TestrastestService } from './testrastest.service';

@Injectable({
  providedIn: 'root'
})
export class CorrectorService {

  constructor( private _tat:TestrastestService ){}
  
  corregido!:correface;
  inarow:number = 0;

  comprobador(jugadaCorrecta:Chinaface,respuesta:number|string,tiporespuesta:string){

    //Funcionamiento:
    
    const acierto = (jugada:Chinaface):correface => {
      this.inarow++;
      return {
        jugada:jugada,
        correcto:true,
      }
    }

    const fallo = (jugada:Chinaface,tiporespuesta:string):correface => {
      this.inarow = 0;
      return {
        jugada:jugada,
        correcto:false,
        error: tiporespuesta
      }
    }
    
    //Ejecucion:
    switch(typeof(respuesta)){
      case "number" :
        if(jugadaCorrecta.puntos == respuesta){ this.corregido = acierto(jugadaCorrecta) } else { this.corregido = fallo(jugadaCorrecta,tiporespuesta) } ; break ;
      case "string" :
        switch(tiporespuesta){
          case "fan" :
            if (jugadaCorrecta.nombre == respuesta) { this.corregido = acierto(jugadaCorrecta) } else { this.corregido = fallo(jugadaCorrecta,tiporespuesta) } ; break ;
          case "descripcion":
            if (jugadaCorrecta.detalles == respuesta) { this.corregido = acierto(jugadaCorrecta) } else { this.corregido = fallo(jugadaCorrecta,tiporespuesta) }  ; break ;
        }
    }

    this._tat.pasarsiguiente();

  }

}
