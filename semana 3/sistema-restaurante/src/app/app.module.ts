import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './main/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteModule } from './main/cliente/cliente.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './main/header/header.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';
import { RestauranteComponent } from './main/restaurante/restaurante.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClienteModule,
    HttpClientModule,
  ],
  providers: [provideEnvironmentNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
