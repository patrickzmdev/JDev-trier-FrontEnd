import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { CadastroFuncionariosModule } from './features/cadastro-funcionarios/cadastro-funcionarios.module';
import { ListagemFuncionariosModule } from './features/listagem-funcionarios/listagem-funcionarios.module';


@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    CadastroFuncionariosModule,
    ListagemFuncionariosModule
  ]
})
export class FuncionarioModule { }
