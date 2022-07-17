import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TunerPageComponent } from './page/tuner-page/tuner-page.component';

const routes: Routes = [
  {
    path:'',
    component: TunerPageComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TunerRoutingModule { }
