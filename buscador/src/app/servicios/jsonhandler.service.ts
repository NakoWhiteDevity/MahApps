import { Injectable } from '@angular/core';
import prueba from 'src/assets/jsons/china.json'

//Tutorial del que me he servido:
//https://blog.nubecolectiva.com/como-leer-un-archivo-json-en-una-tabla-de-bootstrap-4-con-angular-8/

@Injectable({
  providedIn: 'root'
})
export class JsonhandlerService {

  chinaJSON:any = prueba;
  
  constructor(){}

}
