import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {

  constructor(private router: Router) {}

  editarUsuario(id: number) {
    this.router.navigate([`/funcionario/cadastro/${id}`]);
  }
}
