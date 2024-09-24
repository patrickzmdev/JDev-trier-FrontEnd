import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private id: number = 1
  private produtos: Array<Product> = [
    {id:1, nome: "Celular", marca: 'Apple', estoque: 100, preco: 2500.00}
  ]

  getList(){
    return this.produtos
  }

  getById(productId: number): Product | undefined{
    return this.produtos.find(p => p.id == productId);
  }

  addProduto(produto: Product){
    if(produto.id == undefined){
      produto.id = ++this.id;
      this.produtos.push(produto)
    }else{
      this.produtos = this.produtos.filter((product) => product.id != produto.id )
      this.produtos.push(produto)
    }
  }

  removeProduto(id:number){
    this.produtos = this.produtos.filter(p => p.id != id)
  }
}
