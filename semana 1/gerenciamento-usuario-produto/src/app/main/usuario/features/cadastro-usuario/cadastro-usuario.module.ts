import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CadastroUsuarioModule { }
