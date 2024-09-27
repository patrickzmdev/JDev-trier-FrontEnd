import { Component, OnInit } from '@angular/core';
import { MesaDto } from '../model/mesa';
import { FormGroup } from '@angular/forms';
import { MesaServiceService } from '../service/mesa-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-mesa',
  templateUrl: './cadastro-mesa.component.html',
  styleUrls: ['./cadastro-mesa.component.scss']
})
export class CadastroMesaComponent implements OnInit {
  mesa: MesaDto = {
    id: 0,
    numero:0,
    qntPessoas: 0,
    idRestaurante:0
  };

  form!: FormGroup
  isEditMode: boolean = false

  constructor(
    private mesaService: MesaServiceService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.isEditMode = true;
        this.carregarMesa(+id);
      }
  }

  carregarMesa(id: number): void{
    this.mesaService.getMesaById(id).subscribe((data: MesaDto) => {
      this.mesa = data;
    })
  }


  adicionarMesa(mesa: MesaDto): void{
    if(this.isEditMode){
      this.mesaService.atualizarMesa(this.mesa!.id, mesa).subscribe(() => {
        alert('Mesa atualizada com sucesso')
        this.router.navigate(['/mesa']);
      }, (error) => {
        alert('Ocorreu um erro ao atualizar a mesa');
      });
    } else{
      this.mesaService.adicionarMesa(mesa).subscribe(() => {
        alert('Mesa adicionada com sucesso')
        this.router.navigate(['/mesa']);

      }, (error) => {
        alert('Ocorreu um erro ao adicionar a mesa')
      });
    }
  }

}
