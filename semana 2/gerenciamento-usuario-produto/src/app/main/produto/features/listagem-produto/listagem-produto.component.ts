import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.scss'
})
export class ListagemProdutoComponent implements OnInit{
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void {
    this.produtos = this.produtoService.listarProdutos();
  }

}
