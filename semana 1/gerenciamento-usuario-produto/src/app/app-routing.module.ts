import { PaginaNaoExistenteComponent } from './main/pagina-nao-existente/pagina-nao-existente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

      {
        path: 'produto',
        loadChildren: () => import('./main/produto/produto.module').then((m) => m.ProdutoModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./main/usuario/usuario.module').then((m) => m.UsuarioModule)
      },

  { path: '**', component: PaginaNaoExistenteComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
