import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nome: string = '';
  idade: number = 0;
  email: string = '';
  telefone: string = '';

  @Output() clienteAdicionado = new EventEmitter<{ nome: string; idade: number; email: string; telefone: string }>();

  meuMetodo() {
    if (this.idade > 0 && this.idade < 120) {
      this.clienteAdicionado.emit({ nome: this.nome, idade: this.idade, email: this.email, telefone: this.telefone });
      this.nome = '';
      this.idade = 0;
      this.email = '';
      this.telefone = '';
    } else {
      alert("Idade fora do permitido");
    }
  }
}
