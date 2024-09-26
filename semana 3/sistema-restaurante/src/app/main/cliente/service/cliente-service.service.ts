import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDto } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private apiUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  adicionarCliente(cliente: ClienteDto): Observable<ClienteDto>{
    return this.http.post<ClienteDto>(this.apiUrl, cliente);

  }

  atualizarCliente(id: number, cliente: ClienteDto): Observable<ClienteDto> {
    return this.http.put<ClienteDto>(`${this.apiUrl}/${id}`, cliente);
  }



  listarClientes(page: number = 0, size: number = 10, searchTerm?: string): Observable<any> {
    const params: any = { page: page.toString(), size: size.toString() };
    if (searchTerm) {
      params.searchTerm = searchTerm;
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  getClienteById(id: number): Observable<ClienteDto> {
    return this.http.get<ClienteDto>(`${this.apiUrl}/${id}`);
  }
}
