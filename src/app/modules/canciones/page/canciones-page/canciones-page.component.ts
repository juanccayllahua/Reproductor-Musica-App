import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canciones-page',
  templateUrl: './canciones-page.component.html',
  styleUrls: ['./canciones-page.component.css']
})
export class CancionesPageComponent implements OnInit {
  canciones: {
    song: Array<any>, accessLink: Array<any>
  } = { song: [], accessLink: [] }
  constructor() { }

  ngOnInit(): void {
    this.canciones.song = [
      {
        cancion: 'Siempre te amaré',
        artistas: 'Los Vazques',
        album: 'Latin Music',
        time: '03:30',
        imgurl: 'https://is3-ssl.mzstatic.com/image/thumb/Video115/v4/05/22/05/05220581-ba39-5936-a704-4af0dd0ab6f4/Jobce62741a-66f5-407a-8de5-f6b5bb29cb3d-111305783-PreviewImage_preview_image_nonvideo_sdr-Time1618408342313.png/270x270cc.webp',
        router: ['/', 'song?id=19999117']
      },
      {
        cancion: 'Hasta la raiz',
        artistas: 'Corazon Serrano',
        album: 'Latin Music',
        time: '03:30',
        imgurl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3d/e9/76/3de97629-c540-742c-0a23-accb78e142c3/196292135992.jpg/300x300bb.webp',
        router: ['/', 'song?id=19999117']
      },
      {
        cancion: 'tu vida',
        artistas: 'Los Vazques',
        album: 'Latin Music',
        time: '03:30',
        imgurl: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/7a/07/81/7a078179-fdf0-3f2a-b5e2-289573aa1697/0.jpg/300x300bb.webp',
        router: ['/', 'song?id=19999117']
      }
    ]
  }

}
