import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {path : "",
    children: [
      {path: 'listagem', component: ListagemComponent},
      {path: 'formulario', component: FormularioComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormularioComponent,
    ListagemComponent,
    EdicaoComponent
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
