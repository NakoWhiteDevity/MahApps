export interface Chinaface {
    
    id:number;
    puntos:number;
    tipos:number[];
    packs:number;
    pareja:boolean;
    nombre:string;
    detalles:string;
    detallesHTML?:string;
    
}

export interface iteface {
    jugada:Chinaface,
    caso:boolean
}

export interface nofanchinaface {
    posarray:number,
    jugada:Chinaface
}

export interface correface{
    jugada:Chinaface,
    correcto:boolean,
    error?:string|number
}