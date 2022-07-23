import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-page',
  templateUrl: './artista-page.component.html',
  styleUrls: ['./artista-page.component.css']
})
export class ArtistaPageComponent implements OnInit {
  artistas: {
    nombres: Array<any>, accessLink: Array<any>
  } = { nombres: [], accessLink: [] }
  constructor() { }

  ngOnInit(): void {

    this.artistas.nombres = [
      {
        artistaname: 'Corazon Serrano',        
        classtema: 'card-artist',
        router: ['/', 'song?id=19999117']
      },
      {
        artistaname: 'Los Ronish',        
        classtema: 'card-artist',
        router: ['/', 'song?id=19999117']
      },
      {
        artistaname: 'Los Puntos',        
        classtema: 'card-artist',
        router: ['/', 'song?id=19999117']
      },
      {
        artistaname: 'Martin Garrix',        
        classtema: 'card-artist',
        router: ['/', 'song?id=19999117']
      },
      {
        artistaname: 'Chinito del Ande',        
        classtema: 'card-artist',
        router: ['/', 'song?id=19999117']
      }

    ]
  }

}
