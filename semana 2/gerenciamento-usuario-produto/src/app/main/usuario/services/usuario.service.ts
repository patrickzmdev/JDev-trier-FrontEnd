import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [];

  cadastrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  listarUsuarios(): Usuario[] {
    return this.usuarios;
  }

  editarUsuario(index: number, usuarioAtualizado: Usuario): void {
    if (this.usuarios[index]) {
      this.usuarios[index] = usuarioAtualizado;
    }
  }

  excluirUsuario(index: number): void {
    if (this.usuarios[index]) {
      this.usuarios.splice(index, 1);
    }
  }

  getId(): number {
    if(this.usuarios.length === 0){
      return 1;
    }

    const maiorId = Math.max(...this.usuarios.map(usuario => usuario.id));
    return maiorId + 1;

  }
}
