import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RouterModule } from '@angular/router';
import { MesaModule } from './features/mesa/mesa.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    RouterModule,
    MesaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestauranteModule { }
