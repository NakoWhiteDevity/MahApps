import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  conmutador = { buscador : false, quiz : false, letrero : false }
  objeto:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  accionconmutadora(enciende:string){
    switch(enciende){
      case 'buscador' : {this.conmutador.buscador = true ; this.conmutador.quiz = false ; this.conmutador.letrero = false} ; break ;
      case 'quiz' : {this.conmutador.buscador = false ; this.conmutador.quiz = true ; this.conmutador.letrero = false} ; break ;
      case 'letrero' : {this.conmutador.buscador = false ; this.conmutador.quiz = false ; this.conmutador.letrero = true} ; break ;
    }
  }

}
