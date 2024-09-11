let qntAlunos = prompt("Quantos alunos tem na sala? ");
console.log(qntAlunos);

let listaAlunos = [];

const calcularMedia = (notas) => {
    const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return somaNotas / notas.length;
};

const verificarAprovacao = (media) => {return media >= 7 ? 'Aprovado' : 'Reprovado'}; 

for (let index = 1; index <= qntAlunos; index++) {
    let nomeAluno = prompt(`Insira o nome do aluno ${index}`);

    const qntNotas = prompt(`Insira a quantidade de notas do aluno ${nomeAluno} `);

    const notas = [];

    for (let index2 = 1; index2 <= qntNotas; index2++) {
        let notaAluno = prompt(`Insira a ${index2} nota`);
        notas.push(Number(notaAluno)); 
    }

    console.log(`Notas do aluno ${nomeAluno}:`, notas);

    const mediaAluno = calcularMedia(notas); 
    const statusAluno = verificarAprovacao(mediaAluno);

    listaAlunos.push({
        nome: nomeAluno,
        notas: notas,
        media: mediaAluno,
        status: statusAluno
    });

}

console.log('Alunos aprovados:' + listaAlunos
    .filter(aluno => aluno.status === "Aprovado")
    .map(aluno => `Nome: ${aluno.nome},\n Média: ${aluno.media.toFixed(2)}`)
    .join("\n"));

console.log('Alunos reprovados:' + listaAlunos
    .filter(aluno => aluno.status === "Reprovado")
    .map(aluno => `Nome: ${aluno.nome},\n Média: ${aluno.media.toFixed(2)}`)
    .join("\n"));
