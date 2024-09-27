import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemRestauranteComponent } from './features/listagem-restaurante/listagem-restaurante.component';
import { CadastroRestauranteComponent } from './features/cadastro-restaurante/cadastro-restaurante.component';
import { CadastroMesaComponent } from './features/mesa/cadastro-mesa/cadastro-mesa.component';
import { ListagemMesaComponent } from './features/mesa/listagem-mesa/listagem-mesa.component';
import { BuscarMesaComponent } from './features/mesa/buscar-mesa/buscar-mesa.component';
import { MesaComponent } from './features/mesa/mesa.component';
import { RestauranteComponent } from './restaurante.component';

const routes: Routes = [
  {
    path: "",
    component: RestauranteComponent,
    children: [
        {
          path: "",
          redirectTo: "listagem",
          pathMatch: "full"
        },
        {
          path: "listagem",
          component: ListagemRestauranteComponent
        },
        {
          path: "cadastro",
          children:[
                  {path:"", component: CadastroRestauranteComponent},
                  {path: ":id", component: CadastroRestauranteComponent}
          ]
        },
        {path: "mesa",
          loadChildren: () => import('./features/mesa/mesa.module').then(m => m.MesaModule)
        }
      ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
