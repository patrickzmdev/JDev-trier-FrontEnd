import { Foto } from "./foto";

export interface Album{
  userId: number,
  id: number,
  title: string,
  fotos?: Array<Foto>,
  mostrarFotos?:boolean;
}
