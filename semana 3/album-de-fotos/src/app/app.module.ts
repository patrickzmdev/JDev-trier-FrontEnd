import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './main/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FotoServiceService } from './main/services/foto-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    FotoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
