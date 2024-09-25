import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { Foto } from '../models/foto';
import { FotoServiceService } from '../services/foto-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{

  albuns!: Array<Album>
  fotos!: Array<Foto>
  fotoSelecionada?: Foto;



  constructor(private fotoService: FotoServiceService, private router: Router){}

  ngOnInit(): void {
    this.fotoService.getAlbuns().subscribe((albuns) => {
      this.fotoService.getFotos().subscribe((fotos) => {
        console.log("Fotos recebidas:", fotos);
        this.fotos = fotos;
        const fotosPorAlbum = new Map<number, Foto[]>();

        fotos.forEach(foto => {

          if (!fotosPorAlbum.has(foto.albumId)) {
            fotosPorAlbum.set(foto.albumId, []);
          }
          fotosPorAlbum.get(foto.albumId)?.push(foto);

        });

        this.albuns = albuns.map(album => {
          console.timeEnd()
          const fotosDoAlbum = fotosPorAlbum.get(album.id)?.slice(0, 10) || [];
          album.fotos = fotosDoAlbum;
          album.mostrarFotos = false;
          console.log(`Álbum: ${album.title}`, fotosDoAlbum);

          return album;

        });





        //this.albuns = albuns.map((album) => {
        //  const fotosDoAlbum = album.fotos = this.fotos.filter(foto => foto.albumId === album.id).slice(0, 10);
        //  album.mostrarFotos = false;
        //  console.log(`Álbum: ${album.title}`, fotosDoAlbum);

        //  return album;


      });
    });
  }


  toggleFotos(album: Album): void {
    album.mostrarFotos = !album.mostrarFotos;
    console.log(`Mostrar fotos para o álbum: ${album.title}: ${album.mostrarFotos}`);
  }

  selecionarFoto(foto: Foto): void{
    this.fotoSelecionada = foto;
  }


}
