import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './cliente.component';
import { ListagemClienteComponent } from './features/listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  {

        path:"",
        redirectTo: "listagem",
        pathMatch: "full"
      },
      {
        path: "listagem",
        component: ListagemClienteComponent
      },
      {
        path: "cadastro",
        children:[
          {path:"", component: CadastroClienteComponent},
          {path: ":id", component: CadastroClienteComponent}
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
