import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
})
export class CadastroUsuarioComponent implements OnInit {
  form: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      data: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      const usuarioParaEditar = this.usuarioService.listarUsuarios().find(usuario => usuario.id === this.id);
      if (usuarioParaEditar) {
        this.form.patchValue({
          name: usuarioParaEditar.name,
          data: usuarioParaEditar.data
        });
      }
    }
  }

  cadastrar() {
    if (this.form.valid) {
      const usuario: Usuario = {
        id: this.id || this.usuarioService.getId(),
        name: this.form.value.name,
        data: this.form.value.data
      };
      if (this.id) {
        this.usuarioService.editarUsuario(this.id, usuario);
      } else {
        this.usuarioService.cadastrarUsuario(usuario);
      }
      this.form.reset();
    }
  }
}
