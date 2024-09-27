import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RouterModule } from '@angular/router';
import { MesaModule } from './features/mesa/mesa.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroRestauranteComponent } from './features/cadastro-restaurante/cadastro-restaurante.component';
import { ListagemRestauranteComponent } from './features/listagem-restaurante/listagem-restaurante.component';
import { CnpjPipe } from './pipes/cnpj.pipe';


@NgModule({
  declarations: [CadastroRestauranteComponent, ListagemRestauranteComponent, CnpjPipe],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    RouterModule,
    MesaModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RestauranteModule { }
