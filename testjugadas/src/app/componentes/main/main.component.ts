import { Component, OnInit } from '@angular/core';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { Chinaface } from 'src/app/interfaces/chinaface';

//Linea para importar el módulo de underscore. Tutorial en el commit:
import * as _ from 'underscore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{

  //82 jugadas.
  jugadasReadonly:Chinaface[] = [];
  indice:number[] = this.crearindice();
  
  constructor( private _jh:JsonhandlerService ) {
    /*
    const copia = (jugadasJSON:Chinaface[]) => {
      this.jugadasReadonly = jugadasJSON;
    }
    */
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => this.jugadasReadonly = resp);
  }

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  ngOnInit(): void {}

  iterador(i:number){
    
    const pasarsiguiente = () => {
      this.indice.shift();
      if (this.indice.length == 22){
        this.indice = this.crearindice();
      }
    }
    
    const haydetalles = (detalles:string):boolean =>{
      if (detalles == "") { return false } else { return true };
    }
    
    let caso = {
      jugada:this.jugadasReadonly[i],
      caso: haydetalles(this.jugadasReadonly[i].detalles)
    }
     
    pasarsiguiente();
    console.log(caso);
    return caso;
  }

  randomcondesc():number{
    return _.random(1,2);
  }


}
