import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [
  { path: '', redirectTo: '/listagem', pathMatch: 'full' },
  { path: 'listagem', component: ListagemComponent },
  { path: 'adicionar', component: FormularioComponent },
  { path: 'editar/:id', component: EdicaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
