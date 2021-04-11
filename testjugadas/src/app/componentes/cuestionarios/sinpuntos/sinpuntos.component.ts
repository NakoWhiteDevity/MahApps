import { Component, Input, OnInit } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';

@Component({
  selector: 'app-sinpuntos',
  templateUrl: './sinpuntos.component.html'
})
export class SinpuntosComponent implements OnInit {

  @Input() jugadasReadonlyChild:Chinaface[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
