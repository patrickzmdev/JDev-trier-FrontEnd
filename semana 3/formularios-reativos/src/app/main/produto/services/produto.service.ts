import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private id: number = 1
  private produtos: Array<Product> = [
    {id:1, nome: "Celular", marca: 'Apple', estoque: 100, preco: 2500.00}
  ]

  private quantidadeCarrinho = new BehaviorSubject<number>(this.produtos.length);
  quantidadeCarrinho$ = this.quantidadeCarrinho.asObservable();

  getList(){
    return this.produtos
  }

  getById(productId: number): Product | undefined{
    return this.produtos.find(p => p.id == productId);
  }

  addProduto(produto: Product){
    if(!produto.id){
      produto.id = ++this.id;
      this.produtos.push(produto)
      alert("Cadastro efetuado com sucesso")
      this.atualizarQuantidadeCarrinho();
    }else{
      this.produtos = this.produtos.filter((product) => product.id != produto.id )
      this.produtos.push(produto)
      alert("Cadastro editado com sucesso")
    }

  }

  removeProduto(id:number){
    this.produtos = this.produtos.filter(p => p.id != id)
    this.atualizarQuantidadeCarrinho();
  }

  private atualizarQuantidadeCarrinho() {
    this.quantidadeCarrinho.next(this.produtos.length);
  }
}
