import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './main/cliente/cliente.component';
import { HomeComponent } from './main/home/home.component';
import { RestauranteComponent } from './main/restaurante/restaurante.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"cliente",
    component: ClienteComponent,
    loadChildren: () => import('./main/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path:"restaurante",
    loadChildren: () => import('./main/restaurante/restaurante.module').then(m => m.RestauranteModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
