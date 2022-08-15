import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor(private http:HttpClient) {

   }

   getAllMusic$(id:number =1 , cancion:string=""):Observable<any>{
    // return this.http.get(`http://localhost:5000/apimusica/listmusica`)
    const body = {
      id, 
      cancion:'applimors'
    }

    return this.http.post(`http://localhost:5000/apimusica/listmusica`,body);

   }
}
