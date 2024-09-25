import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppRoutingModule,

  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
