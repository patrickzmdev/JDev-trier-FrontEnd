import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ListagemComponent } from './features/listagem/listagem.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    children: [
      {
        path: "listagem",
        component: ListagemComponent
      },
      {
        path: "cadastro",
        children: [
          {path: "", component: CadastroComponent},
          {path: ":id", component: CadastroComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
