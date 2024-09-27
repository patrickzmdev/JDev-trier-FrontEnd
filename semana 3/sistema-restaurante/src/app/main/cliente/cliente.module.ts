import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastroClienteComponent } from './features/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './features/listagem-cliente/listagem-cliente.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CpfPipe } from './pipes/cpf.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';


@NgModule({
  declarations: [
    CadastroClienteComponent,
    ListagemClienteComponent,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    RouterOutlet
  ]
})
export class ClienteModule { }
