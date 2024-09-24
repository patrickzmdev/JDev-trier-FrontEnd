let pessoa = {
    id: 1,
    nome: "Odair",
    idade: 22,
    saudacoes: () => {
        console.log(`Ola meu nome é ${pessoa.nome}`)
    }

}

console.log(pessoa)
pessoa.saudacoes();

let carro = new Object();
carro.placa = "minhaPlaca";
carro.marca = "VW";
console.log(carro);