export interface ClienteDto {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  telefone: string;
  dataCadastro: string;
  quantidadeReservas: number;
  quantidadeValorGasto: number;
  bloqueado: boolean;
  idRestaurante: number;
}
