import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: 'cadastro', component: FormularioComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
