import { Component } from '@angular/core';
import { ProdutoService } from './main/produto/services/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formularios-reativos';
  quantidadeCarrinho = 0;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.quantidadeCarrinho$.subscribe(quantidade => {
      this.quantidadeCarrinho = quantidade;
    });
  }
}
