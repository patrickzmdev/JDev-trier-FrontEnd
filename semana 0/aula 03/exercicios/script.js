
let listaAlunos = [];

const calcularMedia = (notas) => {
    const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return (somaNotas / notas.length).toFixed(2);
};

const verificarAprovacao = (media) => {return media >= 7 ? 'Aprovado' : 'Reprovado'};

function mostrarAlunos(lista) {
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = '';

    for (const aluno of lista){
        let linha = document.createElement("tr");

        let id = document.createElement("td");
        id.textContent = aluno.id;

        let nome = document.createElement("td");
        nome.textContent = aluno.nome;

        let notas = document.createElement("td");
        notas.textContent = aluno.notas;

        let media = document.createElement("td");
        media.textContent = aluno.media;

        let status = document.createElement("td");
        status.textContent = aluno.status;

        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(notas)
        linha.appendChild(media);
        linha.appendChild(status);

        tableBody.appendChild(linha)
    }
}

function adicionarAlunos(){
    let qntAlunos = prompt("Quantos alunos você quer inserir ?");
    for (let index = 1; index <= qntAlunos; index++) {
        let nomeAluno = prompt(`Insira o nome do aluno ${index}`);

        const qntNotas = prompt(`Insira a quantidade de notas do aluno ${nomeAluno} `);

        const notas = [];

        for (let index2 = 1; index2 <= qntNotas; index2++) {
            let notaAluno = prompt(`Insira a ${index2} nota`);
            notas.push(Number(notaAluno));
        }

        const mediaAluno = calcularMedia(notas);

        const alunoNovo = {
            id: listaAlunos.length + 1,
            nome: nomeAluno,
            notas: notas,
            media: mediaAluno,
            status: verificarAprovacao(mediaAluno)
        };

        listaAlunos.push(alunoNovo);
    }

    mostrarAlunos(listaAlunos);
}

function removerAlunos(){
    let idAlunoRemover = prompt("Digite o Id do aluno que deseja remover:");

    //Necessario converter porque no prompt o dado vem como string
    idAlunoRemover = Number(idAlunoRemover);

    listaAlunos = listaAlunos.filter(aluno => aluno.id !== idAlunoRemover);

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';

    console.log(listaAlunos)

    mostrarAlunos(listaAlunos);

}
