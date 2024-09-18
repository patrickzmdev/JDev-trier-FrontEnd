import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.scss']
})
export class EdicaoComponent {
  @Input() cliente: Client | null = null;
  @Output() clienteSalvo = new EventEmitter<Client>();

  salvar() {
    if (this.cliente) {
      this.clienteSalvo.emit(this.cliente);
    }
  }
}
