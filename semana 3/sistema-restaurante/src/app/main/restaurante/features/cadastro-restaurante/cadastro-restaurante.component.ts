import { Component, OnInit } from '@angular/core';
import { RestauranteDto } from '../../model/restaurante';
import { FormGroup } from '@angular/forms';
import { RestauranteService } from '../../service/restaurante-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.scss']
})
export class CadastroRestauranteComponent implements OnInit {
  restaurante: RestauranteDto = {
    id: 0,
    nome:'',
    cnpj:'',
    estrelas:1

  };

  estrelasValidas = true;

  form!: FormGroup
  isEditMode: boolean = false

  constructor(
    private restauranteService: RestauranteService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isEditMode = true;
      this.carregarRestaurante(+id);
    }
  }

  carregarRestaurante(id: number): void{
    this.restauranteService.getRestauranteById(id).subscribe((data: RestauranteDto) => {
      this.restaurante = data;
    })
  }

  adicionarRestaurante(restaurante: RestauranteDto): void{
    if(this.isEditMode){
      this.restauranteService.atualizarRestaurante(this.restaurante!.id, restaurante). subscribe(() => {
        alert('Restaurante atualizado com sucesso')
        this.router.navigate(['/restaurante']);
      }, (error) => {
        alert('Ocorreu um erro ao atualizar o cadastro do restaurante');
      });
    }else{
      this.restauranteService.adicionarRestaurante(restaurante).subscribe(() =>{
        alert('Restaurante adicionado com sucesso')
        this.router.navigate(['/restaurante']);
      }, (error) => {
        alert('Ocorreu um erro ao adicionar o restaurante')
      })
    }
  }

  onEstrelasChange(estrelas: number) {
    this.estrelasValidas = estrelas >= 1 && estrelas <= 3;
  }

}
