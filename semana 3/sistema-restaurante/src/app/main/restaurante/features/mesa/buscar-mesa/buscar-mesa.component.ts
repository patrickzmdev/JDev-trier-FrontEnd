import { Component } from '@angular/core';
import { MesaDto } from '../model/mesa';
import { MesaServiceService } from '../service/mesa-service.service';

@Component({
  selector: 'app-buscar-mesa',
  templateUrl: './buscar-mesa.component.html',
  styleUrls: ['./buscar-mesa.component.scss']
})
export class BuscarMesaComponent {
  idRestaurante: number = 0;
  data: string = '';
  capacidadePessoas: number = 0;
  mesas: MesaDto[] = [];

  constructor(private mesaService: MesaServiceService) {}

  buscarMesas() {
    this.mesaService
      .buscarMesaPorDataECapacidadePessoas(this.idRestaurante, this.data, this.capacidadePessoas)
      .subscribe(
        (mesas) => {
          this.mesas = mesas;
          console.log('Mesas encontradas:', mesas); // Adicione este log
        },
        (error) => {
          console.error('Erro ao buscar mesas:', error);
        }
      );
  }

}
