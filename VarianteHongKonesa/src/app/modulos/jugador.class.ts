import * as _ from 'underscore';

class Jugador {
    
    
    nombre:string;
    puntuacion:number[];
    arrayvientos:string[];
    
    private static cuentainstancias:number = 1;
    private static arraysillas:any[] = _.shuffle([1,2,3,4])

    constructor( nombre:string ){
        Jugador.cuentainstancias++;
        this.nombre = nombre;
        this.puntuacion = [0];
        this.arrayvientos = this.getarrayvientos( Jugador.arraysillas.pop() )
    }
    
    getarrayvientos( cuentainstancias:number ):string[]{
        let caso = new Array();
        switch ( cuentainstancias ){
            //El primer jugador se sienta en este orden : 1,2,4,3 :
            case 1 : { caso = ["E","N","W","S","S","E","N","W","N","W","S","E","W","S","E","N"] ; break ; }
            //El segundo se sienta en este orden : 2,1,3,4 :
            case 2 : { caso = ["S","E","N","W","E","N","W","S","W","S","E","N","N","W","S","E"] ; break ; }
            //El tercero se sienta en este orden : 3,4,2,1 :
            case 3 : { caso = ["W","S","E","N","N","W","S","E","S","E","N","W","E","N","W","S"] ; break ; }
            //El cuarto se sienta en este orden : 4,3,1,2 :
            case 4 : { caso = ["N","W","S","E","W","S","E","N","E","N","W","S","S","E","N","W"] ; break ; }
        }
        return caso;
    }
    
}

export { Jugador }