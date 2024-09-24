import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrl: './meu-primeiro-componente.component.scss'
})
export class MeuPrimeiroComponenteComponent {
  meuLink = "www.google.com";
  valorInput = "";

  meuMetodo(){
    alert("Ola");
  }
}
