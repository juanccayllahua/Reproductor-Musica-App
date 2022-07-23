import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderUserComponent,MediaPlayerComponent
  ]
})
export class CompartidoModule { }
