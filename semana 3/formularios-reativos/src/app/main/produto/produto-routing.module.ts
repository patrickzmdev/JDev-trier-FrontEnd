import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ListagemComponent } from './features/listagem/listagem.component';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  {
    path: "",
    component: ProdutoComponent,
    children:[
      {
        path: "listagem",
        component: ListagemComponent
      },
      {
        path: "cadastro",
        component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
