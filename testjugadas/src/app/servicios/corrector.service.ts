import { Injectable } from '@angular/core';
import { Chinaface,correface } from '../interfaces/chinaface';

@Injectable({
  providedIn: 'root'
})
export class CorrectorService {

  constructor(){}
  corregido!:correface;

  comprobador(jugadaCorrecta:Chinaface,respuesta:number|string,tiporespuesta:string){

    //Funcionamiento:
    const acierto = (jugada:Chinaface):correface => {
      return {
        jugada:jugada,
        correcto:true
      }
    }

    const fallo = (jugada:Chinaface,tiporespuesta:string):correface => {

      
      
      return {
        jugada:jugada,
        correcto:false,
        fallo:
      }
    }
    
    //Ejecucion:
    switch(typeof(respuesta)){
      case "number" :
        if(jugadaCorrecta.puntos == respuesta){ this.corregido = acierto(jugadaCorrecta) } else { //this.corregido = fallo }
    }

  }

}
