import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NumemanoService } from 'src/app/servicios/numemano.service';

@Component({
  selector: 'app-cambiosillas',
  templateUrl: './cambiosillas.component.html'
})
export class CambiosillasComponent implements OnInit {

  cambiosillas:string[] = [];
  @Output() deshijo: EventEmitter<boolean>;
  
  constructor(private _nm:NumemanoService ) {
    this.deshijo = new EventEmitter();
  }

  ngOnInit(): void {
    this.cambiodesillas(this._nm.numemano);
  }

  cambiodesillas(numemano:number){
    let caso:string[];
    
    let array1:string[] = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de su derecha, y los otros dos entre si.","csderecha"];
    let array2:string[] = ["ATENCIÓN: Antes de comenzar la mano, el que esta sentado en la silla referenciada, se cambia con el de en frente, y los otros dos entre si.","csfrente"];
    let array3:string[] = ["",""];
      
    switch(numemano){
        //cambio con el de la derecha
        case 5: case 13: { this.deshijo.emit(true) ; caso = array1 ; this.cambiosillas = caso ; break ; }
        case 9: { this.deshijo.emit(true) ; caso = array2 ; this.cambiosillas = caso ; break ; }
        default: { caso = array3 ; this.cambiosillas = caso ; break ; }
      }
  }

  emitirfalse(){
    this.deshijo.emit(false);
    this.cambiosillas = ["",""];
  }

}
