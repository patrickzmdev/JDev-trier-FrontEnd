import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent implements OnInit {
  usuarios: any[] = [];
  router: any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listarUsuarios();
  }

  editarUsuario(index: number): void {
    const usuarioParaEditar = this.usuarios[index];
    this.router.navigate(['cadastro/:id', usuarioParaEditar.id]);
  }


  excluirUsuario(index: number): void {
    this.usuarioService.excluirUsuario(index);
    this.usuarios = this.usuarioService.listarUsuarios();
  }

}
