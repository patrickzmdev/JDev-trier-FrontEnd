import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';
import { CadastroFuncionariosComponent } from './features/cadastro-funcionarios/cadastro-funcionarios.component';
import { ListagemFuncionariosComponent } from './features/listagem-funcionarios/listagem-funcionarios.component';

const routes: Routes = [
  { path: '',
    component: FuncionarioComponent,
    children: [
      {path: '', component: ListagemFuncionariosComponent},
      {path: 'cadastro', component: CadastroFuncionariosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
