import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../usuario/services/usuario.service';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({ name: 'Rivotril', estoque: 10 });
  }


  buildForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      estoque: [0, [Validators.required, this.validacaoEstoque]],
    });
  }


  validacaoEstoque(control: any) {
    return control.value <= 0 ? { estoqueMinimo: true } : null;
  }


  cadastrar() {
    if (this.form.valid) {
      this.produtoService.cadastrarProdutos(this.form.getRawValue());

      console.log('Dados do formulário:', this.form.getRawValue());
      this.form.reset();

    } else {
      console.log('Formulário inválido!');
    }
  }
}

