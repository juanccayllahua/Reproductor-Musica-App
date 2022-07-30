import { Component, OnInit } from '@angular/core';
import { MultimediaService } from 'src/app/compartido/servicio/multimedia.service';
import { CancionModel } from 'src/app/core/models/cancion.model';

@Component({
  selector: 'app-canciones-page',
  templateUrl: './canciones-page.component.html',
  styleUrls: ['./canciones-page.component.css']
})
export class CancionesPageComponent implements OnInit {
  canciones: {
    song: Array<any>, accessLink: Array<any>
  } = { song: [], accessLink: [] }
  cancion: CancionModel = { _id: 0, nombre: '', album: '', url: '', cover: '' };
  artista: any = []

  constructor(private _multimediaServices: MultimediaService) {

  };


  ngOnInit(): void {
    const observer$0 = this._multimediaServices.CancionInfo$.subscribe
      (artista => {
        this.artista = artista
        console.log('hola',artista);
        
      }
      )
    // this.cancion._id=1
    // this.cancion.url="C:\appnode\ServicioConvertidor\public\MartinGarrix.mp4"
    // this.reproducirMusica(this.cancion);
    this.canciones.song = [
      {
        _id: 1,
        cancion: 'Pop',

        nombre: 'Ed Sheeran',
        album: ' Shape of You',
        time: '03:30',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/cantante-icon%2F1iconEdsheran.webp?alt=media&token=a5b5d690-2970-45a0-92a4-0382761db6e1',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FEdSheeran-shapeofyou.mp3?alt=media&token=4807e1b7-ef7b-4abf-940e-d94954fc3405',
        router: ['/', 'song?id=19999117']
      },
      {
        _id: 2,
        cancion: 'Cumbia',
        nombre: 'Corazon Serrano',
        album: 'Hasta la raiz',
        time: '03:30',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/cantante-icon%2F2corazonserrano.webp?alt=media&token=28b363a9-6798-46d6-a00f-eabffafd6611',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FHastalaraizCorazonSerranoNicolSinchi.mp3?alt=media&token=3d0cde27-0228-40f2-af7e-de901d5a8600',
        router: ['/', 'song?id=19999117']
      },
      {
        _id: 3,
        cancion: 'Electro',
        nombre: 'Martin Garrix & David Guetta',
        album: 'So Far Away feat. Jamie Scott & Romy Dya',
        time: '03:30',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/cantante-icon%2F3martinGarrixIcon.jpg?alt=media&token=081b8194-be21-40ac-8cc5-e12c5bc2d13e',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FMartinGarrixDavidGuetta-SoFarAway.mp3?alt=media&token=76f3cadd-f315-4c2c-9566-f2bf9034fb6e',
        router: ['/', 'song?id=19999117']
      }
      ,
      {
        _id: 4,
        cancion: 'Electro',
        nombre: 'Martin Garrix ',
        album: 'Spotless',
        time: '03:30',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/cantante-icon%2F4martinicon.jpg?alt=media&token=92072d9e-5f84-48af-8c68-039d2a119dc2',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FSpotless.mp3?alt=media&token=cbcb797c-cdb1-4442-8364-cc5a502f6385',
        router: ['/', 'song?id=19999117']
      }, {
        _id: 5,
        cancion: 'Electro',
        nombre: 'Martin Garrix & Mesto',
        album: 'WIEE',
        time: '03:31',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2Fwii.jpg?alt=media&token=4dea109b-a78e-460d-973f-a640ac59aaa4',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2FMartinGarrixMesto-WIEE.mp3?alt=media&token=709eaf1e-a2cd-4e5b-855b-c1340a5fc7e9',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 6,
        cancion: 'Bachata',
        nombre: 'Prince Royce',
        album: 'Te robare Esta Noche',
        time: '03:31',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2Faplemusic-princeroyce.jpg?alt=media&token=5041d255-21c4-4557-a3b4-1c8c2d3bee13',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2FTeRobarePrinceRoyce.mp3?alt=media&token=a95a1e90-9b1e-41ee-9354-323588887b1c',
        router: ['/', 'song?id=19999117']

      }
      , {
        _id: 7,
        cancion: 'Bachata',
        nombre: 'Aventura',
        album: 'Enseñame a olvidar',
        time: '03:31',
        cover: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2Faventura.jpg?alt=media&token=a37b5107-7055-4e66-a618-f2d271e3a175',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/file%2FAventuraEnsenameAOlvidar.mp3?alt=media&token=f24905d9-bea6-46de-84b8-d48065dc6d9b',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 8,
        cancion: 'Reggueton',
        nombre: 'CNCO FT Yandel',
        album: 'Hey Dj',
        time: '03:31',
        cover: 'https://i.ytimg.com/vi/YN-aYhtMHIw/maxresdefault.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FCNCOYandel-HeyDj.mp3?alt=media&token=2a85c4f2-5c61-430b-9f10-3de4812501e0',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 9,
        cancion: 'Reggueton',
        nombre: 'FRauw Alejandro Chencho Corleone',
        album: 'Desesperados',
        time: '03:31',
        cover: 'https://i1.sndcdn.com/artworks-k7A9f1jj6iNxdejK-mGFyJg-t500x500.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FRauwAlejandroChenchoCorleoneDesesperados.mp3?alt=media&token=e33ddefb-28b3-457a-8630-0e1f1ee9b67a',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 10,
        cancion: 'Bachata',
        nombre: 'Prince Royce',
        album: 'El Amor Que Perdimos',
        time: '03:31',
        cover: 'https://www.buenamusica.com/media/fotos/discos/p/prince-royce/prince-royce_el-amor-que-perdimos.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FPrinceRoyce-ElamorQuePerdimos.mp3?alt=media&token=97c2d615-3c9d-4c2d-a0ca-99c83218c46a',
        router: ['/', 'song?id=19999117']

      }
      , {
        _id: 11,
        cancion: 'Reggueton',
        nombre: 'CNCO',
        album: 'Reggaeton Lento',
        time: '03:31',
        cover: 'https://i1.sndcdn.com/artworks-000181992939-q7i5jo-t500x500.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FCNCO-ReggaetonLento.mp3?alt=media&token=01bbe11f-e25a-46f7-a3f7-9ae35a62108e',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 12,
        cancion: 'Reggueton',
        nombre: 'Ozuna Romeo Santos',
        album: 'El Farsante',
        time: '03:31',
        cover: 'https://sss.moda.pe/imagen/square/el-farsante-remix-b4458.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FOzunaRomeoSantosElFarsante.mp3?alt=media&token=80dc2e23-4780-45a9-89a6-34a7f1eab0e8',
        router: ['/', 'song?id=19999117']

      },
      {
        _id: 13,
        cancion: 'Electro',
        nombre: 'Avicii',
        album: 'Levels',
        time: '03:31',
        cover: 'https://i0.wp.com/shakezmusic.com/wp-content/uploads/2021/05/image_editor_output_image-1756721580-1622389241870.png?fit=597%2C355&ssl=1',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2Flevels.mp3?alt=media&token=dfc123af-9b05-48f1-a16f-68f052e90f40',
        router: ['/', 'song?id=19999117']

      },
      {
        _id: 14,
        cancion: 'Reggueton',
        nombre: 'Ozuna x Doja Cat Sia',
        album: 'Del Mar',
        time: '03:31',
        cover: 'https://1.bp.blogspot.com/-RpCdG5UEHZo/X4tkhWugvlI/AAAAAAAAIpc/EVFclUEdOh8457Xvr2d3mjETxXJi5d5kQCPcBGAYYCw/s1000/Del-Mar.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FOzunaxDojaCatxSia-DelMar.mp3?alt=media&token=bb290af4-93c8-49ad-8185-69efa81cee8f',
        router: ['/', 'song?id=19999117']

      },
      {
        _id: 15,
        cancion: 'Bachata',
        nombre: 'Prince Royce',
        album: 'La Carretera',
        time: '03:31',
        cover: 'https://i.scdn.co/image/ab67616d00001e026c1180ae683cc09d840a9163',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FPrinceRoyce-LaCarretera.mp3?alt=media&token=cd7a7272-34b1-41d8-b0da-664a7e4dc497',
        router: ['/', 'song?id=19999117']

      },
      {
        _id: 16,
        cancion: 'Reggueton',
        nombre: 'Wisin FT Ozuna',
        album: 'Escapate conmigo Letra Lirycs',
        time: '03:31',
        cover: 'https://www.lahiguera.net/musicalia/artistas/wisin/disco/8799/tema/15526/wisin_escapate_conmigo-portada.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FWisin-EscapateConmigoLetraLyricsftOzuna.mp3?alt=media&token=06bf94ed-ba3a-486a-93b7-ecee1c43dd38',
        router: ['/', 'song?id=19999117']

      }, {
        _id: 17,
        cancion: 'Reggueton',
        nombre: 'CNCO',
        album: 'Quisiera',
        time: '03:31',
        cover: 'https://i.musicaimg.com/letras/500/2249440.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FCNCO-Quisiera.mp3?alt=media&token=c66b38b9-0c4c-4145-ad13-0f9048d0d5e6',
        router: ['/', 'song?id=19999117']

      }

    ]

    // this.listaObservadores$ = [observer$0]
  }


  reproducir(cancion: CancionModel): void {
    // this._multimediaServices.pauseplay()


    this._multimediaServices.CancionInfo$.next(cancion)
  }
}
