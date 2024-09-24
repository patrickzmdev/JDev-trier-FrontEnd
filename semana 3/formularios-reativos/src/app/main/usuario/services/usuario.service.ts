import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private id: number = 1
  private usuarios: Array<User> = [
    {id:1, nome: "Patrick Zanela Medeiros", email:"patrick@patrick.com", dataNascimento: new Date("1993-04-29")}
  ]


  getList(){
    return this.usuarios
  }

  getById(userId: number): User | undefined{
    return this.usuarios.find(user => user.id == userId);
  }

  addUsuario(usuario: User){
    if(usuario.id == undefined){
      usuario.id = ++this.id;
      this.usuarios.push(usuario)
    }else{
      this.usuarios = this.usuarios.filter((user) => user.id != usuario.id)
      this.usuarios.push(usuario)
    }
  }

  removeUsuario(id:number){
    this.usuarios = this.usuarios.filter(user => user.id != id)
  }
}
