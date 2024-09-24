import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  teste?: Array<string> = [];

  private produtos: any[] = [];

  constructor() { }

  cadastrarProdutos(produto: any): void {
    this.produtos.push(produto);
  }

  listarProdutos(): any[] {
    return this.produtos;
  }
}
