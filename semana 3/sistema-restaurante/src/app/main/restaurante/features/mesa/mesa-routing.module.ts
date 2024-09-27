import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemMesaComponent } from './listagem-mesa/listagem-mesa.component';
import { CadastroMesaComponent } from './cadastro-mesa/cadastro-mesa.component';
import { BuscarMesaComponent } from './buscar-mesa/buscar-mesa.component';
import { MesaComponent } from './mesa.component';

const routes: Routes = [
  {
    path: "",
    component: MesaComponent,
    children:[
      {
        path: "listagem",
        component: ListagemMesaComponent
      },
      {
        path: "cadastro",
        children:[
          {path:"", component: CadastroMesaComponent},
          {path: ":id", component: CadastroMesaComponent}
        ]
      },
      {
        path: "buscar",
        component: BuscarMesaComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
