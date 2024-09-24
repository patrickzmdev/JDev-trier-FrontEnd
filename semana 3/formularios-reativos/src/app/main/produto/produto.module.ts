import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ListagemModule } from './features/listagem/listagem.module';
import { CadastroModule } from './features/cadastro/cadastro.module';


@NgModule({
  declarations: [
    ProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ListagemModule,
    CadastroModule
  ]
})
export class ProdutoModule { }
