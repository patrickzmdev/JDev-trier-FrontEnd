import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './main/layout/layout.component';
import { paginaGuardsGuard } from './main/guards/pagina-guards.guard';

const routes: Routes = [
  {
    path: '', canActivate: [paginaGuardsGuard], component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
