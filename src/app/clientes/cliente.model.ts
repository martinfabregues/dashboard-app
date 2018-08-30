export interface Cliente {
    id: number;
    codigo: string;
    nombres: string;
    apellido: string;
    razonsocial: string;
    documento: number;
    tipodocumento_id: number;
    condicioniva_id: number;
    direccion: string;
    numero: string;
    piso: string;
    depto: string;
    codpostal: string;
    cuentacorriente: number;
  }
  
  export interface CondicionIva {
    id: number;
    nombre: string;
    tasaiva: number;
  }
  export interface TipoDocumento {
    id: number;
    nombre: string;
    
  }