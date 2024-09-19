import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  @Output() enviaCadastroEvent = new EventEmitter<Client>()

  nome: string = ""
  idade: number = 0
  email: string = ""

  cadastro(evento: Event) {
    this.enviaCadastroEvent.emit({ id: undefined, nome: this.nome, idade: this.idade, email: this.email })
    evento.preventDefault()
  }

}
