import { Component, OnInit } from '@angular/core';
import { RestauranteDto } from '../../model/restaurante';
import { RestauranteService } from '../../service/restaurante-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-restaurante',
  templateUrl: './listagem-restaurante.component.html',
  styleUrls: ['./listagem-restaurante.component.scss']
})
export class ListagemRestauranteComponent implements OnInit {
  restaurantes: RestauranteDto[] = [];

  constructor(
    private restauranteService: RestauranteService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.listarRestaurantes();
  }

  listarRestaurantes(): void{
    this.restauranteService.listarRestaurante()
    .subscribe(response => {
      this.restaurantes = response
    })
  }

  atualizarRestaurante(id: number){
    this.router.navigateByUrl(`restaurante/cadastro/${id}`)
  }

  removerRestaurante(id: number) {
    this.restauranteService.removerRestaurante(id).subscribe(() => {
      this.restaurantes = this.restaurantes.filter(r => r.id !== id);
      this.listarRestaurantes();
    }, error => {
      console.error('Erro ao remover restaurante', error);
      alert('Erro ao remover restaurante');
    });
  }
}
