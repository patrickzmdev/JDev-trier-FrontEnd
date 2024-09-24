import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../main/produto/services/produto.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarVisible = false;
  quantidadeCarrinho = 0;

  constructor(private produtoService: ProdutoService){
  }
  ngOnInit(): void {
    this.produtoService.quantidadeCarrinho$.subscribe(quantidade => {
      this.quantidadeCarrinho = quantidade;
    });
  }

  toggleSidebar(){
    this.sidebarVisible = !this.sidebarVisible;
  }



}
