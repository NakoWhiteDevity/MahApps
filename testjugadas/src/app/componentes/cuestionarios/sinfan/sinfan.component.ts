import { Component, Input, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-sinfan',
  templateUrl: './sinfan.component.html'
})
export class SinfanComponent implements OnInit {

  @Input() jugadasReadonlyChild!:Chinaface;
  jugadascopia = this._jh.jugadas;
  
  constructor( private _jh:JsonhandlerService ) { }

  ngOnInit(): void {
    //console.log(this.jugadascopia.length) -> 82 jugadas;
  }

  descaso(jugada:Chinaface):number{
    let caso!:number;
    if (jugada.detalles !== ""){caso = 2;}
    if (jugada.detallesHTML){caso = 3;}
    return caso;
  }

  barajafanes(jugada:Chinaface){

    //Contenido:
    let correcta:string = jugada.nombre;

    const aislar = () => {
      console.log(this.jugadascopia.indexOf(jugada));
    }

    //Ejecucion
    aislar();

  }

}
