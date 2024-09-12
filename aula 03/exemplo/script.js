const listaDeAlunos = [];

function calculaMedia(notas) {
    return notas.reduce((acumulador, notaAtual) => acumulador + notaAtual.nota, 0) / notas.length;
}

function imprimeAlunos(lista) {
    const tableBody = document.getElementById("table-body");

    for (const aluno of lista) {
        let linha = document.createElement("tr");

        let id = document.createElement("td");
        id.textContent = aluno.id;

        let nome = document.createElement("td");
        nome.textContent = aluno.nome;

        let media = document.createElement("td");
        media.textContent = aluno.media;

        let situacao = document.createElement("td");
        situacao.textContent = aluno.isAprovado() ? "Aprovado" : "Reprovado";

        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(media);
        linha.appendChild(situacao);

        tableBody.appendChild(linha)
    }
}

function adicionaAlunos() {
    const qtdAlunos = prompt("Insira a quantidade de alunos \nDeixe vazio para cancelar");

    if(qtdAlunos != "cancelar"){
        for (let i = 1; i <= qtdAlunos; i++) {
            const nomeAluno = prompt(`Insira o nome do aluno ${i}`);

            const qtdNotas = prompt(`Insira a quandidade de provas do aluno ${nomeAluno}`);

            const notas = [];

            for (let j = 1; j <= qtdNotas; j++) {
                const nota = prompt(`Insira a nota da prova ${j} de ${nomeAluno}`);
                notas.push({ prova: j, nota: Number(nota) });
            }

            const alunoNovo = {
                id: listaDeAlunos.length + 1,
                nome: nomeAluno,
                notas: notas,
                media: calculaMedia(notas),
                isAprovado: function () {
                    return this.media >= 7 ? true : false
                }
            }

            listaDeAlunos.push(alunoNovo);
        }
    }

    imprimeAlunos(listaDeAlunos)
}

// console.log(`Aprovados: ${listaDeAlunos.filter(aluno => aluno.isAprovado()).map(aluno => aluno.nome)}`);

// console.log(`Reprovados: ${listaDeAlunos.filter(aluno => !aluno.isAprovado()).map(aluno => aluno.nome)}`);
