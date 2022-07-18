import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tunner',
    loadChildren:()=> import('../tuner/tuner.module').then(m=>m.TunerModule)
  },
  {
    path:'artista',
    loadChildren:()=> import('../artistas/artistas.module').then(m=>m.ArtistasModule)
  },
  {
    path:'cancion',
    loadChildren:()=> import('../canciones/canciones.module').then(m=>m.CancionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
