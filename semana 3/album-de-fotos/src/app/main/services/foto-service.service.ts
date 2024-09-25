import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Album } from '../models/album';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  constructor(private http: HttpClient) { }

  getAlbuns(){
    return this.http.get<Array<Album>>("https://jsonplaceholder.typicode.com/albums").pipe(take(1))
  }

  getFotos(){
    return this.http.get<Array<Foto>>("https://jsonplaceholder.typicode.com/photos").pipe(take(1))
  }
}
