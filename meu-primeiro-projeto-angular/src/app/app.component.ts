import { Component } from '@angular/core';
import { Client } from './models/client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clientes: Client[] = [];
  clienteEmEdicao: Client | null = null;

  adicionarCliente(novoCliente: Client) {
    this.clientes.push(novoCliente);
  }

  selecionarCliente(cliente: Client) {
    this.clienteEmEdicao = { ...cliente };
  }

  salvarCliente(cliente: Client) {
    const index = this.clientes.findIndex(c => c.email === cliente.email);
    if (index !== -1) {
      this.clientes[index] = cliente;
    }
    this.clienteEmEdicao = null;
  }

  excluirCliente(index: number) {
    this.clientes.splice(index, 1);
  }
}
