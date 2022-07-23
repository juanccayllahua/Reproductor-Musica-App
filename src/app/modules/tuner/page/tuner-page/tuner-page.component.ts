import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuner-page',
  templateUrl: './tuner-page.component.html',
  styleUrls: ['./tuner-page.component.css']
})
export class TunerPageComponent implements OnInit {
  categorias: {
    categ: Array<any>, accessLink: Array<any>
  } = { categ: [], accessLink: [] }
  constructor() { }

  ngOnInit(): void {
    this.categorias.categ = [
      {
        _id:1,
        categoria: 'Cumbia', 
        imgurl: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/6f/3d/6f/6f3d6f43-20d7-0bbe-e8b4-dc5a94fe52f2/source/340x113sr.webp',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:2,
        categoria: 'Electro', 
        imgurl: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/51/95/7c/51957c7c-d270-0b5c-6f44-47e869bd7630/source/1040x346sr.webp',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:3,
        categoria: 'Cumbia Sureña', 
        imgurl: 'https://is2-ssl.mzstatic.com/image/thumb/Features114/v4/1e/24/bb/1e24bb2f-a013-ee49-4e23-82d0d94637d0/source/340x113sr.webp',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:4,
        categoria: 'Huayno', 
        imgurl: 'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/e6/c9/68/e6c96806-6ab4-2b80-5dcc-532cc82bf7cc/source/1040x346sr.webp',
        router: ['/', 'categ?id=19999117']
      }


    ]
  }

}
