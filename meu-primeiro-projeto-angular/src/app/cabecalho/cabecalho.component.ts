import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {
  @Input() tituloRecebidoPai?: string;
  @Output() trocarTituloEvent = new EventEmitter<string>();
  @Output() pesquisarEvent = new EventEmitter<string>();

  campoPesquisa: string = '';

  trocarTitulo() {
    this.trocarTituloEvent.emit('Novo Título');
  }

  pesquisar() {
    this.pesquisarEvent.emit(this.campoPesquisa);
  }
}
