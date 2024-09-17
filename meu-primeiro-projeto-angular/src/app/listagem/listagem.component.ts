import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {
  @Input() clientes: { nome: string; idade: number; email: string; telefone: string; editando?: boolean }[] = [];
  @Output() clienteEditado = new EventEmitter<{ index: number; nome: string; idade: number; email: string; telefone: string }>();
  @Output() clienteExcluido = new EventEmitter<number>();

  editarCliente(index: number) {
    this.clientes[index].editando = true;
  }

  salvarCliente(index: number) {
    const cliente = this.clientes[index];
    if (cliente.nome && cliente.email && cliente.telefone && cliente.idade) {
      this.clientes[index].editando = false;
      this.clienteEditado.emit({
        index,
        nome: cliente.nome,
        idade: cliente.idade,
        email: cliente.email,
        telefone: cliente.telefone
      });
    } else {
      alert('Todos os campos devem ser preenchidos!');
    }
  }

  excluirCliente(index: number) {
    if (confirm('Excluir este cliente?')) {
      this.clienteExcluido.emit(index);
    }
  }
}
