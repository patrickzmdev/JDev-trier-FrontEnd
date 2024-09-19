import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './main/usuario/usuario.module';
import { ProdutoModule } from './main/produto/produto.module';
import { PaginaNaoExistenteComponent } from './main/pagina-nao-existente/pagina-nao-existente.component';
import { LayoutModule } from "./main/layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoExistenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    ProdutoModule,
    LayoutModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
