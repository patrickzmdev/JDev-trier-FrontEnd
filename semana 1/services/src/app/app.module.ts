import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './main/produto/produto.module';
import { FuncionarioModule } from './main/funcionario/funcionario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    FuncionarioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
