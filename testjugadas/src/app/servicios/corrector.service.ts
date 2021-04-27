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
    
    const tipodesc = (jugada:Chinaface):string => {
      let caso!:string;
      if (jugada.detalles){ caso = jugada.detalles };
      if (jugada.detallesHTML){ caso = jugada.detallesHTML };
      this._tat.pasarsiguiente();
      return caso;
    }
    
    const acierto = (jugada:Chinaface):correface => {
      this.inarow++;
      this._tat.pasarsiguiente();
      return {
        jugada:jugada,
        correcto:true,
        descripcion: tipodesc(jugada)
      }
    }

    const fallo = (jugada:Chinaface,tiporespuesta:string):correface => {
      this.inarow = 0;
      this._tat.pasarsiguiente();
      return {
        jugada:jugada,
        correcto:false,
        error: tiporespuesta,
        descripcion: tipodesc(jugada)
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
            let transformada:string = tipodesc(jugadaCorrecta);
            if (transformada == respuesta) { this.corregido = acierto(jugadaCorrecta) } else { this.corregido = fallo(jugadaCorrecta,tiporespuesta) }  ; break ;
        }
    }

  }

}
