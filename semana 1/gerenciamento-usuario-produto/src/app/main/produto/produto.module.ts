import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { ListagemProdutoModule } from './features/listagem-produto/listagem-produto.module';
import { CadastroProdutoModule } from './features/cadastro-produto/cadastro-produto.module';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ListagemProdutoModule,
    CadastroProdutoModule
  ]
})
export class ProdutoModule { }
