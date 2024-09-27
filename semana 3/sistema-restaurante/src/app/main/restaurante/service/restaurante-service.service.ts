import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestauranteDto } from '../model/restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private apiUrl = "http://localhost:8080/restaurantes";


  constructor(private http: HttpClient) { }

  adicionarRestaurante(restaurante: RestauranteDto): Observable<RestauranteDto>{
    return this.http.post<RestauranteDto>(this.apiUrl, restaurante)
  }

  listarRestaurante():Observable<RestauranteDto[]>{
    return this.http.get<RestauranteDto[]>(this.apiUrl);
  }

  atualizarRestaurante(id: number, restaurante: RestauranteDto): Observable<RestauranteDto>{
    return this.http.put<RestauranteDto>(`${this.apiUrl}/${id}`, restaurante)
  }

  getRestauranteById(id: number): Observable<RestauranteDto>{
    return this.http.get<RestauranteDto>(`${this.apiUrl}/${id}`)
  }

  removerRestaurante(id: number):Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
