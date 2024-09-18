import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  cliente: Client = {
    nome: '',
    idade: 0,
    email: '',
    telefone: ''
  };

  @Output() clienteAdicionado = new EventEmitter<Client>();

  constructor(private router: Router) {}

  meuMetodo() {
    if (this.cliente.nome && this.cliente.idade > 0 && this.cliente.idade < 120 && this.cliente.email && this.cliente.telefone) {
      this.clienteAdicionado.emit({ ...this.cliente });


      this.cliente = {
        nome: '',
        idade: 0,
        email: '',
        telefone: ''
      };


      this.router.navigate(['/listagem']);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
