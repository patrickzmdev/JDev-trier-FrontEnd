import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup

  constructor(private formBuilder:FormBuilder){}


  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      produto: [null, Validators.required],
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

}
