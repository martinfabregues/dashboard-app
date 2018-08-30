import { Injectable } from '@angular/core';
import { Cliente, CondicionIva, TipoDocumento  } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {
  private clientes: Cliente[];
  private condicionesiva: CondicionIva[];
  private tiposdocumento: TipoDocumento[];
  constructor() { 
    this.condicionesiva = [
      {
        id: 0,
        nombre: "Consumidor Final",
        tasaiva: 21
      },
      {
        id: 1,
        nombre: "Responsable Inscripto",
        tasaiva: 21
      }
    ];
    this.tiposdocumento = [
      {
        id: 0,
        nombre: "DNI"
      },
      {
        id:1,
        nombre: "PASAPORTE"
      }
    ];
    this.clientes=[];
    
  }//fin constructor
  getCondicionesIva()
    {
      return this.condicionesiva;
    }
  getTiposDocumento()
  {
    return this.tiposdocumento;
  }
  getClientes()
  {
    return this.clientes;
  }

  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  nuevoCliente():Cliente{
    return{
      id: this.clientes.length,
      codigo: '',
      nombres: '',
      apellido: '',
      razonsocial: '',
      documento: 0,
      tipodocumento_id: 0,
      condicioniva_id: 0,
      direccion: '',
      numero: '',
      piso: '',
      depto: '',
      codpostal: '',
      cuentacorriente: 0
    }
  }
}
