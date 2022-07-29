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
        imgurl: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/banner%2F1imgbanner.webp?alt=media&token=f75a7b93-dabc-4ec0-9606-df7e66ad13ba',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:2,
        categoria: 'Electro', 
        imgurl: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/banner%2F2imgbanner.webp?alt=media&token=f869abc1-9166-489d-be3a-9f3636f85dac',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:3,
        categoria: 'Cumbia Sureña', 
        imgurl: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/banner%2F3banner.webp?alt=media&token=64be8367-873f-4310-9177-8be500087858',
        router: ['/', 'categ?id=19999117']
      },
      {
        _id:4,
        categoria: 'Huayno', 
        imgurl: 'https://firebasestorage.googleapis.com/v0/b/munayapp-2227b.appspot.com/o/banner%2F4banner.webp?alt=media&token=70e38507-9872-47cf-b39a-555e1f44374b',
        router: ['/', 'categ?id=19999117']
      }


    ]
  }

}
