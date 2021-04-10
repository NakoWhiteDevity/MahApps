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
  indice:number[] = this.crearindice(); indicetrash:number[] = [];
  indicetest:number[] = this.crearindicetest(); indicetestrash:number[] = [];
  
  constructor( private _jh:JsonhandlerService ) {
    const copia = (jugadasJSON:Chinaface[]) => {
      this.jugadasReadonly = jugadasJSON;
    }
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => copia(resp));
  }

  crearindice():number[]{
    let indice:number[] = [];
    for(let n = 1 ; n <= 82 ; n++){
      indice.push(n);
    }
    indice = _.shuffle(indice);
    return indice;
  }

  crearindicetest(){
    let indice:number[] = [];
    for(let n1 = 1 ; n1 <= 3 ; n1++){
      for(let n2 = 1 ; n2 <= 10 ; n2++){
        indice.push(n1);
      }
    }
    indice = _.shuffle(indice);
  }

  ngOnInit(): void {}

  iterador(index:number):Chinaface{
    return this.jugadasReadonly[index];
  }

  pasarsiguiente(){
    let atrash:any = this.indice.shift() ; this.indicetrash.push(atrash) ;
    let atrashindice:any = this.indicetest.shift() ; this.indicetestrash.push(atrashindice) ;
    if (this.indicetrash.length == 62){
      this.indicetrash.forEach(numero => {
        this.indice.push(numero);
      });
      this.indice = _.shuffle(this.indice);
      this.indicetrash = [];
    }
    //console.log(this.indice,this.indicetrash);
  }


}
