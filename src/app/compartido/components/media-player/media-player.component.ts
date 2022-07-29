import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CancionModel } from 'src/app/core/models/cancion.model';
import { MultimediaService } from '../../servicio/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')

  listaObservadores$: Array<Subscription> = []
  state: String = 'paused';
  porcenta: number = 0
  artista: any = []

  canciones: {
    song: Array<any>, accessLink: Array<any>
  } = { song: [], accessLink: [] }


  constructor(public multimediaservices: MultimediaService) { }

  ngOnInit(): void {
    const observer$0 = this.multimediaservices.CancionInfo$.subscribe
      (artista => {
        this.artista = artista 
      }
      )


    const observer$1 = this.multimediaservices.playerStatus$
      .subscribe(status => {
        this.state = status ;
        if(this.state==='ended'){
          console.log('alerta ::> ');
          
          this.adelantaretrocede(this.artista._id,'next')
        }
      })
    const observer$2 = this.multimediaservices.playerPorcentaje$
      .subscribe(porcenta => {
        this.porcenta = porcenta; 
      })



    this.listaObservadores$ = [observer$0, observer$1, observer$2]
    this.cargarcanciones();

    
  }

  cargarcanciones(): void {
    this.canciones.song = [
      {
        _id: 1,
        cancion: 'Pop',

        nombre: 'Ed Sheeran',
        album: ' Shape of You',
        time: '03:30',
        cover: 'https://www.clarin.com/img/2022/05/29/ed-sheeran-en-vivo-en___r_zdVnDSy_2000x1500__1.jpg',
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FEdSheeran-shapeofyou.mp3?alt=media&token=4807e1b7-ef7b-4abf-940e-d94954fc3405',
        router: ['/', 'song?id=19999117']
      },
      {
        _id: 2,
        cancion: 'Cumbia',
        nombre: 'Corazon Serrano',
        album: 'Hasta la raiz',
        time: '03:30',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3d/e9/76/3de97629-c540-742c-0a23-accb78e142c3/196292135992.jpg/300x300bb.webp', 
        url: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/musica%2FHastalaraizCorazonSerranoNicolSinchi.mp3?alt=media&token=3d0cde27-0228-40f2-af7e-de901d5a8600',
        router: ['/', 'song?id=19999117']
      },
      {
        _id: 3,
        cancion: 'Electro',
        nombre: 'Martin Garrix & David Guetta',
        album: 'So Far Away feat. Jamie Scott & Romy Dya',
        time: '03:30',
        cover: 'https://i.ytimg.com/vi/o7iL2KzDh38/maxresdefault.jpg',
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
        cover: 'https://cdn.teleticket.com.pe/especiales/martin-garrix-2022/images/banner-resp-martin-garrix.jpg',
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

      }
    ]
  }
  ngOnDestroy(): void {

    this.listaObservadores$.forEach(u => u.unsubscribe());

    // console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }
  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width

    // console.log(`Click(x): ${percentageFromX}`);

    this.multimediaservices.seekAudio(percentageFromX)
    // this.multimediaservices.seekAudio(percentageFromX)

  }

  adelantaretrocede(id: number, estado: string): void {
 
    if (estado === 'back') {
      id =id -1 
    }
    if (estado === 'next') {
      id =id +1 
    }

   

    if (id <= 0) {
      id = this.canciones.song.length
    } else if (id > this.canciones.song.length) {
      id = 1
    }
 
    

    let unacancion: CancionModel ;
    unacancion = {
      album: this.canciones.song.find(x=>x._id === id).album,
      _id: this.canciones.song.find(x=>x._id === id)._id,
      cover: this.canciones.song.find(x=>x._id === id).cover,
      nombre: this.canciones.song.find(x=>x._id === id).nombre,
      url: this.canciones.song.find(x=>x._id === id).url,
    };

    // unacancion.album = this.canciones.song[id].album
    console.log(unacancion);

 


    this.multimediaservices.CancionInfo$.next(unacancion)
  }

}
