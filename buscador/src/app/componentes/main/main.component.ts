import { Component } from '@angular/core';
import { Chinaface } from 'src/app/interfaz/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent{
  
  jugadasReadonly:Chinaface[] = [];
  jugadas:Chinaface[] = [];

  constructor( private _jh:JsonhandlerService ) {
    const doblecopia = (jugadasJSON:Chinaface[]) => {
      this.jugadasReadonly = jugadasJSON;
      this.jugadas = jugadasJSON;
    }
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => doblecopia(resp));
  }

  lellega(evento:any){
    
    const arrayform = (jugada:Chinaface) => {
      let nuevarray:number[] = [];
      let jugadarray:number[] = jugada.tipos;
      let caso:boolean = false;
      for(let flag in evento){
        if(evento[flag] == true){
          let nuevaflag = parseInt(flag);
          nuevarray.push(nuevaflag);
        }
      };
      jugadarray.forEach(tipo => {
        if (nuevarray.indexOf(tipo) !== -1){
          caso = true;
        }
      });
      return caso;
    }    
    this.jugadas = this.jugadasReadonly.filter( arrayform );
  }

}
