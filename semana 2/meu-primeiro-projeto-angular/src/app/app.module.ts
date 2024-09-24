import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EdicaoComponent } from './edicao/edicao.component';


const routes: Routes = [
  { path: 'cadastro', component: FormularioComponent },
  {path: 'teste', redirectTo: 'cadastro'},
  { path: 'listagem', component: ListagemComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  {path: 'cadastro/:id', component: FormularioComponent},

  {path: "clientes",
    children: [
      {path: 'listagem', component: ListagemComponent},
      {path: 'cadastro', component: FormularioComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListagemComponent,
    EdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
