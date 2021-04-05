import { Component } from '@angular/core';
import { Chinaface } from 'src/app/interfaz/chinaface';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent{
  
  //1,2,4,6,8,12,16,24,32,48,64,88.
  
  jugadas:Chinaface[] = [];
  
  constructor( private _jh:JsonhandlerService ) {
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => this.jugadas = resp );
  }

}
