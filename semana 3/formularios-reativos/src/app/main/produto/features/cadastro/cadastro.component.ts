import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../model/product';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup
  product?: Product
  Number: any;
  quantidadeCarrinho = 0;

  constructor(
    private formBuilder:FormBuilder,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ){
    this.route.params.subscribe((param) => {
      this.product = produtoService.getById(param['id']);
    })
  }


  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue(this.product!)
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: [undefined],
      nome: [null, Validators.required],
      marca: [null, Validators.required],
      estoque: [0, (Validators.required, this.validacaoEstoque.bind(this))],
      preco: [0, (Validators.required, this.validacaoPreco.bind(this))]
    })
  }

  validacaoEstoque(estoque: FormGroup){
    if(estoque.value <= 0){
      return {estoqueInvalido: true}
    }
    return null
  }

  validacaoPreco(preco: FormGroup){
    if(preco.value <= 0){
      return {precoInvalido: true}
    }
    return null
  }

  cadastrar(){
    this.produtoService.addProduto(this.form.getRawValue())
  }

}
