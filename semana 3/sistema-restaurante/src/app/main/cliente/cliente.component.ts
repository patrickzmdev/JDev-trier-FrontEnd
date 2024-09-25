import { Component, OnInit } from '@angular/core';
import { ClienteDto } from './model/cliente';
import { ClienteServiceService } from './service/cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: ClienteDto[] = [];
  searchTerm: string = '';
  page: number = 0;
  size: number = 10;

  constructor(private clienteService: ClienteServiceService){}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.listarClientes(this.page, this.size, this.searchTerm)
      .subscribe(response => {
        this.clientes = response.content;
      });
  }

  adicionarCliente(cliente: ClienteDto): void {
    this.clienteService.adicionarCliente(cliente).subscribe(() => {
      this.listarClientes();
    })
  }

}
