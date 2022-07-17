import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TunerRoutingModule } from './tuner-routing.module';
import { TunerPageComponent } from './page/tuner-page/tuner-page.component';
import { CompartidoModule } from 'src/app/compartido/compartido.module';


@NgModule({
  declarations: [
    TunerPageComponent
  ],
  imports: [
    CommonModule,
    TunerRoutingModule
  ]
})
export class TunerModule { }
