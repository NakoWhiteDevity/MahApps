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

  lellega(evento:[]){
    console.log("Le llega al padre:",evento);
    this.jugadas = this.jugadasReadonly.filter( jugada => true )
  }

}
