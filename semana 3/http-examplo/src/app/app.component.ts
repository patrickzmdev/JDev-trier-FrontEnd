import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from './main/services/http-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Correção na propriedade
})
export class AppComponent implements OnInit {
  title = 'http-exemplo';

  constructor(private service: HttpServicesService) {}

  ngOnInit(): void {
    this.service.buscarTodosPosts().subscribe(values => {
      console.log(values);
    });
    this.service.buscarPorId(1).subscribe(values => {
      console.log('buscando por id: ', values);
    });
    this.service.buscarPorQueryParam(2).subscribe(values => {
      console.log('buscando por query Param: ', values);
    });
    this.service.salvarPost().subscribe(values => {
      console.log('salvando post: ', values);
    });
    this.service.editarPost(1).subscribe(values => {
      console.log('editando post 1: ', values);
    });
    this.service.deletePost(2).subscribe(values => {
      console.log('deletou post 2: ', values);
    });
  }
}
