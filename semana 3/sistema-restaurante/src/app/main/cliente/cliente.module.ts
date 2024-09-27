import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './features/listagem-cliente/listagem-cliente.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    CadastroClienteComponent,
    ListagemClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    RouterOutlet
  ]
})
export class ClienteModule { }
