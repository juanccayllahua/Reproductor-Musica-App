import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaPageComponent } from './page/artista-page/artista-page.component';

const routes: Routes = [
  {
    path:'',
    component:ArtistaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistasRoutingModule { }
