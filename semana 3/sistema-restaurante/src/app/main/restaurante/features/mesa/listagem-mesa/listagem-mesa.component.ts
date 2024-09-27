import { Component, OnInit } from '@angular/core';
import { MesaDto } from '../model/mesa';
import { MesaServiceService } from '../service/mesa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-mesa',
  templateUrl: './listagem-mesa.component.html',
  styleUrls: ['./listagem-mesa.component.scss']
})
export class ListagemMesaComponent implements OnInit{
  mesas: MesaDto[] = [];

  constructor(
    private mesaService: MesaServiceService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.listarMesas();
  }

  listarMesas(): void {
    this.mesaService.listarMesas()
      .subscribe(response => {
        this.mesas = response;
      });
  }

  atualizarMesa(id: number){
    this.router.navigateByUrl(`mesa/cadastro/${id}`)
  }

}
