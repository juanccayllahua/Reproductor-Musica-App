import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionesRoutingModule } from './canciones-routing.module';
import { CancionesPageComponent } from './page/canciones-page/canciones-page.component';


@NgModule({
  declarations: [
    CancionesPageComponent
  ],
  imports: [
    CommonModule,
    CancionesRoutingModule
  ]
})
export class CancionesModule { }
