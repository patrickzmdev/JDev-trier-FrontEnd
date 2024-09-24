import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  produtoMenuVisible: boolean = false;
  usuarioMenuVisible: boolean = false;

  toggleProdutoMenu() {
    this.produtoMenuVisible = !this.produtoMenuVisible;
    this.usuarioMenuVisible = false;
  }

  toggleUsuarioMenu() {
    this.usuarioMenuVisible = !this.usuarioMenuVisible;
    this.produtoMenuVisible = false;
  }
}
