import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/modulos/jugador.class';
import { GenerarjugadoresService } from 'src/app/servicios/generarjugadores.service';
import { NumemanoService } from 'src/app/servicios/numemano.service';

@Component({
  selector: 'app-formahjong',
  templateUrl: './formahjong.component.html'
})
export class FormahjongComponent implements OnInit {

  forma:FormGroup;
  squad:Jugador[] = [];
  numemano:number = this._nm.numemano;
  
  constructor( private _router : Router , private _gj:GenerarjugadoresService , private _nm:NumemanoService , private _fb : FormBuilder){
    this.forma = this._fb.group({
      ganamano : new FormControl('',Validators.required),
      dealer : new FormControl('',Validators.required),
      categoria : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this._gj.getStorage();
    for(let jugador in this._gj.squad){
      this.squad.push(this._gj.squad[jugador]);
    }
  }
  
  iraletrero(){
    this._router.navigate(['/letrero']);
  }

  //Esta funcion cambia el nombre del label de la segunda pregunta a de muro, para no tener que decir que la ultima ficha la cedio el jugador que gano la ronda.
  indicadormuro(nombre:string):string{
    let caso:string;
    if (nombre == this.forma.value.ganamano){
      caso = "DE MURO";
      return caso
    }
    return nombre;
  }
  
  submitvalido():boolean{
    let caso:boolean;
    if(this.forma.value.ganamano != "" && this.forma.value.dealer != "" && this.forma.value.categoria) { caso = false; } else { caso = true; } return caso;
  }
  
  //Rutina principal:
  guardar(){
    
    let datosform = this.forma.value,
        ganador:string = datosform.ganamano,
        dealer:string = datosform.dealer,
        categoria:number = datosform.categoria,
        demuro:boolean = (ganador == dealer) ? true : false;

    const categorias = (fan:number,demuro:boolean):number => {
      fan = fan + 1;
      let categorias:number[] = [1,2,4,8,16,32,64];
      switch(demuro){
        case true : if (fan == 1){ return 0 } else { return (categorias[fan] * 2); }
        case false : return categorias[fan];
      }
    }
    
    const hongSumademuro = (sujeto:Jugador) => {
      let epuntos:number = 0;
      for (let jugador in this.squad){
        if(sujeto.nombre !== this.squad[jugador].nombre){
          let victima:Jugador = this.squad[jugador];
          let pago:number = categorias(categoria,true);
          epuntos = epuntos + pago;
          victima.puntuacion.push((victima.puntuacion[victima.puntuacion.length - 1]) - pago);
        }
      }
      sujeto.puntuacion.push((sujeto.puntuacion[sujeto.puntuacion.length - 1]) + epuntos);
    }

    const hongSumadedealer = (sujeto:Jugador) => {
      let epuntos:number = 0;
      for(let jugador in this.squad){
        if (sujeto.nombre !== this.squad[jugador].nombre){
          let victima:Jugador = this.squad[jugador];
          if (victima.nombre == dealer){
            let pago:number = (categorias(categoria,false) * 2);
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          } else {
            let pago:number = categorias(categoria,false);
            epuntos = epuntos + pago;
            victima.puntuacion.push( (victima.puntuacion[victima.puntuacion.length - 1]) - pago );
          }
        }
      }
      sujeto.puntuacion.push((sujeto.puntuacion[sujeto.puntuacion.length - 1]) + epuntos);
    }

    const esEste = (sujeto:Jugador):boolean => {
      if (sujeto.arrayvientos[sujeto.arrayvientos.length - 1] = "E"){ return true } else { return false };
    }
    
    for(let jugador in this.squad){
      if (ganador == this.squad[jugador].nombre){
        let sujeto:Jugador = this.squad[jugador];
        switch(demuro){
          case true : { hongSumademuro(sujeto) ; break ; }
          case false : { hongSumadedealer(sujeto) ; break ; }
        }
        if (esEste(sujeto)){
          this._gj.setStorage(JSON.stringify(this._gj.squad));
          
        } else {
          this._gj.setStorage(JSON.stringify(this._gj.squad));
          this._router.navigate(['/letrero']);
        }
      }
    }

    this._nm.incrementarnumemano();
    this._gj.setStorage(JSON.stringify(this._gj.squad));
    this._router.navigate(['/letrero']);
  
  }

}
