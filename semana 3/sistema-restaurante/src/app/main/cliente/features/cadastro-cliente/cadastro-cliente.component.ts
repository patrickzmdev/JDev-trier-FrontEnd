import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClienteDto } from '../../model/cliente';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  cliente: ClienteDto = {
    id: 0,
    nome: '',
    sobrenome: '',
    cpf: '',
    dataNascimento: '',
    sexo: 'INDEFINIDO',
    telefone: '',
    idRestaurante: 0,
    dataCadastro:"",
    quantidadeReservas: 0,
    quantidadeValorGasto: 0,
    bloqueado: false
  };


  form!:FormGroup
  isEditMode: boolean = false

  constructor(
    private clienteService: ClienteServiceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.carregarCliente(+id);
    }

  }

  carregarCliente(id: number): void {
    this.clienteService.getClienteById(id).subscribe((data: ClienteDto) => {
      this.cliente = data;
    });
  }

  adicionarCliente(cliente: ClienteDto): void {
    if (this.isEditMode) {
      this.clienteService.atualizarCliente(this.cliente!.id, cliente).subscribe(() => {
        alert('Cliente atualizado com sucesso')
        this.router.navigate(['/cliente']);
      }, (error) => {
        alert('Ocorreu um erro ao atualizar o cliente.');
      });
    } else {

      this.clienteService.adicionarCliente(cliente).subscribe(() => {
        alert('Cliente adicionado com sucesso')
        this.router.navigate(['/cliente']);
      }, (error) => {
        alert('Ocorreu um erro ao adicionar o cliente.');
      });
    }
  }
}
