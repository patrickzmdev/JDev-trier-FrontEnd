import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  clientes: { nome: string; idade: number; email: string; telefone: string }[] = [];

  adicionarCliente(cliente: { nome: string; idade: number; email: string; telefone: string }) {
    this.clientes.push(cliente);
  }

  editarCliente(clienteEditado: { index: number; nome: string; idade: number; email: string; telefone: string }) {
    this.clientes[clienteEditado.index] = clienteEditado;
  }

  excluirCliente(index: number) {
    this.clientes.splice(index, 1);
  }
}
