import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {

  productList!:Array<Product>

  constructor(private produtoService: ProdutoService, private router: Router){
    this.productList = produtoService.getList();
  }

  editProduct(id: number){
    this.router.navigateByUrl(`produto/cadastro/${id}`)
  }

  removeProduct(id:number){
    this.produtoService.removeProduto(id);
    this.productList = this.produtoService.getList();
  }

}
