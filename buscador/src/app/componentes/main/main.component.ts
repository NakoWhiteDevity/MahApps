import { Component } from '@angular/core';
import { Chinaface } from 'src/app/interfaz/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent{
  
  jugadas:Chinaface[] = [];
  
  constructor( private _jh:JsonhandlerService ) {
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => this.jugadas = resp );
  }

}
