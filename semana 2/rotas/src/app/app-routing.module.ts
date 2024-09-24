import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { PaginaNaoExistenteComponent } from './components/pagina-nao-existente/pagina-nao-existente.component';


const routes: Routes = [
  {path : "", component: DashboardComponent},
  {
    path: "funcionario",
    children: [
      {path: "cadastro", component: CadastroComponent},
      {path: "listagem", component: ListagemComponent},
      {path: "cadastro/:id", component: CadastroComponent},
    ]
  },
  {path: "**", component: PaginaNaoExistenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
