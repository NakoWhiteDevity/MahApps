import { Component, Input, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import * as _ from 'underscore';

@Component({
  selector: 'app-sinpuntos',
  templateUrl: './sinpuntos.component.html'
})
export class SinpuntosComponent implements OnInit {

  @Input() jugadasReadonlyChild!:Chinaface;
  
  constructor() { }

  ngOnInit(): void {
  }

  descaso(jugada:Chinaface):number{
    let caso!:number;
    if (jugada.detalles == ""){caso = 1;}
    if (jugada.detalles !== ""){caso = 2;}
    if (jugada.detallesHTML){caso = 3;}
    return caso;
  }

  barajapuntos(respuesta:number):number[]{
    //1,2,4,6,8,12,16,24,32,48,64,88;

    //funciones y recursos:
    const tier = (puntuacion:number):number => {
      let caso!:number;
      switch(puntuacion){
        case 1 : caso = 1 ; break ;
        case 2 : caso = 2 ; break ;
        case 4 : caso = 3 ; break ;
        case 6 : caso = 4 ; break ;
        case 8 : caso = 5 ; break ;
        case 12 : caso = 6 ; break ;
        case 16 : caso = 7 ; break ;
        case 24 : caso = 8 ; break ;
        case 32 : caso = 9 ; break ;
        case 48 : caso = 10 ; break ;
        case 64 : caso = 11 ; break ;
        case 88 : caso = 12 ; break ;
      }
      return caso;
    }

    let arraycasos:any[] = [
      [1,2,4,6,8],
      [1,2,4,6,8],
      [1,2,4,6,8],
      
      [2,4,6,8,12],
      [4,6,8,12,16],
      [6,8,12,16,24],
      [8,12,16,24,32],
      [12,16,24,32,48],
      [16,24,32,48,64],
      
      [24,32,48,64,88],
      [24,32,48,64,88],
      [24,32,48,64,88]
    ]

    //Ejecución:
    console.log(respuesta);
    let arrayquiz:number[] = arraycasos[tier(respuesta) - 1]; arrayquiz = _.shuffle(arrayquiz);
    let indice:number = arrayquiz.indexOf(respuesta);
    let extraccion = arrayquiz.splice(indice,1)[0];
    let finalarray:number[] = [extraccion,arrayquiz[0],arrayquiz[1],arrayquiz[2]]; finalarray = _.shuffle(finalarray);
    return finalarray;
  }

  responder(respuesta:number,solucion:number){
    if (respuesta == solucion){
      console.log("respuesta correcta.");
    } else {
      console.warn("respuesta incorrecta");
    }
  }
}
