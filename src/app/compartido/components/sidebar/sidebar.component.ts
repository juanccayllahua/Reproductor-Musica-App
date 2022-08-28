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
 classActive: string = "inactive"
  selectedOptions: string = ""
 menuactivo: boolean = false;
 
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
      },
      // {
      //   name:'Modo Video',
      //   icon:'CancionIcon',
      //   router:['/','cancion']
      // }
    ]

  }

  selectItem(opcion: string): void {
    console.log('seleccionado ', opcion);
    this.selectedOptions = opcion;
    this.classActive = "activo"
  }

  public myFunction(event: any): void {

    if (this.menuactivo) {
      this.menuactivo = false;
    }else{
      this.menuactivo = true;
    }

  }

}
