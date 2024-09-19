import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginaNaoExistenteComponent } from './components/pagina-nao-existente/pagina-nao-existente.component';
import { ListagemComponent } from './components/listagem/listagem.component';



@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    DashboardComponent,
    HeaderComponent,
    PaginaNaoExistenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
