import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistaPageComponent } from './page/artista-page/artista-page.component';


@NgModule({
  declarations: [
    ArtistaPageComponent
  ],
  imports: [
    CommonModule,
    ArtistasRoutingModule
  ]
})
export class ArtistasModule { }
