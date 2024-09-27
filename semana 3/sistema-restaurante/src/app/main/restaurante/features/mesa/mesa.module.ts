import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaRoutingModule } from './mesa-routing.module';
import { RouterModule } from '@angular/router';
import { MesaComponent } from './mesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroMesaComponent } from './cadastro-mesa/cadastro-mesa.component';
import { ListagemMesaComponent } from './listagem-mesa/listagem-mesa.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscarMesaComponent } from './buscar-mesa/buscar-mesa.component';


@NgModule({
  declarations: [MesaComponent, CadastroMesaComponent, ListagemMesaComponent, BuscarMesaComponent],
  imports: [
    CommonModule,
    MesaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MesaModule { }
