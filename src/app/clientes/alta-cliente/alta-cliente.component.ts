import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, CondicionIva, TipoDocumento } from './../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  condicioniva: CondicionIva[];
  tipodocumento: TipoDocumento[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.condicioniva = this.clientesService.getCondicionesIva();
    this.tipodocumento = this.clientesService.getTiposDocumento();
  }

  nuevoCliente(): void{
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

}
