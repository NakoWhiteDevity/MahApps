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
        ["variante china",""],
        ["variante hongkonesa","https://www.google.es"],
        ["variante japonesa","https://www.google.es"]
      ],
      quiz : {
        opcion1: {
          nombre : "variante china",
          enlace : "el que fuera"
        },
        opcion2: {
          nombre : "variante hongkonesa",
          enlace : null
        },
        opcion3: {
          nombre : "variante japonesa",
          enlace : null
        }
      },
      letrero : {
        opcion1 : {
          nombre : "variante china",
          enlace : "El que fuera"
        } ,
        opcion2 : {
          nombre : "variante hongkonesa",
          enlace : "El que fuera"
        } ,
        opcion3 : {
          nombre : "variante japonesa",
          enlace : null
        }
      }
    }
  }
  conmutador = { buscador : false, quiz : false, letrero : false }
  objeto:boolean = true;
  
  
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
