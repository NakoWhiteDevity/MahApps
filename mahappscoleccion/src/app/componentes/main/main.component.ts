import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  funcionamiento = {
    conmutadores : {
      buscador : false,
      quiz : false,
      letrero : false
    },
    opciones : {
      buscador : [
        ["variante china","buscadorChina"],
        ["variante hongkonesa",""],
        ["variante japonesa",""]
      ],
      quiz : [
        ["variante china",""],
        ["variante hongkonesa",""],
        ["variante japonesa",""]
      ],
      letrero : [
        ["variante china","letreroChina"],
        ["variante hongkonesa",""],
        ["variante japonesa",""]
      ]
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  accionconmutadora(enciende:string){
    switch(enciende){
      case 'buscador' : {this.funcionamiento.conmutadores.buscador = true ; this.funcionamiento.conmutadores.quiz = false ; this.funcionamiento.conmutadores.letrero = false} ; break ;
      case 'quiz' : {this.funcionamiento.conmutadores.buscador = false ; this.funcionamiento.conmutadores.quiz = true ; this.funcionamiento.conmutadores.letrero = false} ; break ;
      case 'letrero' : {this.funcionamiento.conmutadores.buscador = false ; this.funcionamiento.conmutadores.quiz = false ; this.funcionamiento.conmutadores.letrero = true} ; break ;
    }
  }

}
