import { Component, OnInit } from '@angular/core';
import { ClienteDto } from '../../model/cliente';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent implements OnInit {
  clientes: ClienteDto[] = [];
  searchTerm: string = '';
  page: number = 0;
  size: number = 10;

  constructor(
    private clienteService: ClienteServiceService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.listarClientes(this.page, this.size, this.searchTerm)
      .subscribe(response => {
        this.clientes = response.content;
      });
  }

  atualizarCliente(id: number){
    this.router.navigateByUrl(`cliente/cadastro/${id}`)
  }


}
