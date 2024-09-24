import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent implements OnInit {
  usuarios: any[] = [];
  router: any;

  constructor(private usuarioService: UsuarioService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listarUsuarios();
  }

  editarUsuario(index: number){
    const usuarioParaEditar = this.usuarios[index];
    this.router.navigate([`usuario/cadastro`, usuarioParaEditar.id]);
  }


  excluirUsuario(index: number) {
    this.usuarioService.excluirUsuario(index);
    this.usuarios = this.usuarioService.listarUsuarios();
  }

}
