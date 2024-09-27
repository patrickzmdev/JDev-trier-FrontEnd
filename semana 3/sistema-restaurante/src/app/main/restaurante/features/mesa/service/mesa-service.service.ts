import { MesaDto } from '../model/mesa';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaServiceService {

  private apiUrl = 'http://localhost:8080/mesas';

  constructor(private http: HttpClient) { }

  adicionarMesa(mesa: MesaDto): Observable<MesaDto>{
      return this.http.post<MesaDto>(this.apiUrl, mesa);
  }

  atualizarMesa(id: number, mesa: MesaDto):
  Observable<MesaDto>{
    return this.http.put<MesaDto>(`${this.apiUrl}/${id}`,mesa)
  }

  listarMesas():Observable<MesaDto[]>{
    return this.http.get<MesaDto[]>(this.apiUrl);
  }

  getMesaById(id:number): Observable<MesaDto> {
    return this.http.get<MesaDto>(`${this.apiUrl}/${id}`)
  }

  buscarMesaPorDataECapacidadePessoas(
    idRestaurante: number,
    data: string,
    capacidadePessoas: number
  ): Observable<MesaDto[]> {
    const params = new HttpParams()
      .set('idRestaurante', idRestaurante.toString())
      .set('data', data)
      .set('capacidadePessoas', capacidadePessoas.toString());

    return this.http.get<MesaDto[]>(`${this.apiUrl}/busca`, { params });
  }

}
