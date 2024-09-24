import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListagemComponent
  ]
})
export class ListagemModule { }
