import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu:{
    defaultOptions: Array<any>, accessLink: Array<any>
  } = {defaultOptions:[],accessLink:[]}
 customOptions: Array<any> =[]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name:'Categoria',
        icon:'ArtistIcon',
        router:['/','tunner']
      },
      {
        name:'Artista',
        icon:'categoriaIcon',
        router:['/','artista']
      },
      {
        name:'Escuchar',
        icon:'CancionIcon',
        router:['/','cancion']
      }
    ]

  }

}
