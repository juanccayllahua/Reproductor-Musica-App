import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesPageComponent } from './page/canciones-page/canciones-page.component';

const routes: Routes = [
  {
    path:'',
    component:CancionesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancionesRoutingModule { }
