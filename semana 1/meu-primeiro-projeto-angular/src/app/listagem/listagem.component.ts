import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {
  @Input() clientes: Client[] = [];
  @Output() clienteEditado = new EventEmitter<Client>();
  @Output() clienteExcluido = new EventEmitter<number>();
  @Output() clienteSelecionado = new EventEmitter<Client>();

  editarCliente(index: number) {
    this.clienteSelecionado.emit(this.clientes[index]);
  }

  excluirCliente(index: number) {
    if (confirm('Excluir este cliente?')) {
      this.clienteExcluido.emit(index);
    }
  }
}
