import { Injectable } from '@angular/core';
import { Chinaface } from 'src/app/interfaces/chinaface';
import chinaJSON from 'src/assets/jsons/china.json'

//Tutorial del que me he servido:
//https://blog.nubecolectiva.com/como-leer-un-archivo-json-en-una-tabla-de-bootstrap-4-con-angular-8/

//tutorial para la variante HTTP:
//https://medium.com/@ingenieromaciasgil/consumiendo-un-archivo-json-en-angular-d88fea1995ec

@Injectable({
  providedIn: 'root'
})
export class JsonhandlerService {
  
  //jugadas:Chinaface[] = chinaJSON;
  jugadas:Chinaface[] = this.diagnosticador();

  diagnosticador():Chinaface[]{
    let caso:Chinaface[] = []; caso.push(chinaJSON[1]);
    return caso;
  }
  
  constructor(){}

}

