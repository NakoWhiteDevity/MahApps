import { Component, OnInit } from '@angular/core';
import { JsonhandlerService } from 'src/app/servicios/jsonhandler.service';
import { Chinaface } from 'src/app/interfaces/chinaface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  jugadasReadonly:Chinaface[] = [];
  
  constructor( private _jh:JsonhandlerService ) {
    const copia = (jugadasJSON:Chinaface[]) => {
      this.jugadasReadonly = jugadasJSON;
    }
    this._jh.getJSON().subscribe( (resp:Chinaface[]) => copia(resp));
  }

  ngOnInit(): void {}

}
