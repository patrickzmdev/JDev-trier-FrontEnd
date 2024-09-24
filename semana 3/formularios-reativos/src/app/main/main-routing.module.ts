import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children:[
      {
        path:"produto",
        loadChildren: () => import("./produto/produto.module").then((module) => module.ProdutoModule)
      },
      {
        path:"usuario",
        loadChildren: () => import("./usuario/usuario.module").then((module) => module.UsuarioModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
