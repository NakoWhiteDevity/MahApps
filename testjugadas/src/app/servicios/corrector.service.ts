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
    const descaso = (jugada:Chinaface):string => {
      let caso!:string;
      if (jugada.detalles !== ""){caso = jugada.detalles;}
      if (jugada.detallesHTML){caso = jugada.detallesHTML;}
      return caso;
    }
    
    const acierto = (jugada:Chinaface):correface => {
      return {
        jugada:jugada,
        correcto:true,
        descripcion: descaso(jugadaCorrecta)
      }
    }

    const fallo = (jugada:Chinaface,tiporespuesta:string):correface => {
      return {
        jugada:jugada,
        correcto:false,
        descripcion: descaso(jugadaCorrecta),
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

  }

}
