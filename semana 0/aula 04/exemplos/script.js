let listaDeTarefas = [];
let id = 0;

function geradorDeId() {
    return ++id;
}

function adicionarTarefa(evento) {
    let valor = evento.srcElement[0].value;

    if (validaTarefa(valor)) {
        const tarefa = criarTarefa(valor);

        listaDeTarefas.push(tarefa)

        adicionaTarefaNaTabela(tarefa)
        atualizarHeader()
    }

    evento.preventDefault();
}

function validaTarefa(tarefa) {
    if (tarefa.trim().length <= 0) {
        console.log("Tarefa inválida");
        //TODO POPUP
        return false;
    }

    return true;
}

function mudarStatus(id, event) {
    let tarefa = listaDeTarefas.filter((tarefa) => tarefa.id == id)[0];
    tarefa.isFinalizada = !tarefa.isFinalizada;

    event.currentTarget.parentElement.parentElement.children[1].classList.toggle("tarefaRiscada")
    event.currentTarget.parentElement.parentElement.classList.toggle("tarefaFinalizada")

    atualizarHeader()
}

function excluirTarefa(event) {
    document.getElementById("corpo-tabela").removeChild(event.currentTarget.parentElement.parentElement)
    atualizarHeader()
}

function criarTarefa(tarefa) {
    let id = geradorDeId()

    return {
        id: id,
        tarefa: tarefa,
        isFinalizada: false
    }
}

function criaLinhaDaTabela(tarefa) {
    const linha = document.createElement("tr");
    linha.classList.add("linha-tabela")

    linha.appendChild(criaCampoStatus(tarefa))
    linha.appendChild(criaCampoTarefa(tarefa));
    linha.appendChild(criaCampoExcluir(tarefa))

    return linha;
}

function criaCampoStatus(tarefa) {
    const status = document.createElement("td");

    const input = document.createElement("input")
    input.type = "checkbox"

    input.addEventListener("click", (event) => mudarStatus(tarefa.id, event))

    status.appendChild(input)

    return status;
}

function criaCampoTarefa(tarefa) {
    const elementoTarefa = document.createElement("td");
    elementoTarefa.textContent = tarefa.tarefa;
    elementoTarefa.className = "tarefa"

    return elementoTarefa;
}

function criaCampoExcluir(tarefa) {
    const excluir = document.createElement("td");

    const botao = document.createElement("button")
    botao.textContent = "Excluir"
    botao.classList.add("botao-excluir-tarefa")
    botao.addEventListener("click", excluirTarefa)

    excluir.appendChild(botao);

    return excluir;
}

function adicionaLinhaNaTabela(linha) {
    const corpoTabela = document.getElementById("corpo-tabela")

    corpoTabela.appendChild(linha);
}

function adicionaTarefaNaTabela(tarefa) {
    const linha = criaLinhaDaTabela(tarefa)

    adicionaLinhaNaTabela(linha)
}

function removerTodas() {
    const corpoTabela = document.getElementById("corpo-tabela")

    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.lastChild)
    }

    atualizarHeader()
}

function atualizarHeader() {
    let elementos = Array.prototype.slice.call(document.getElementById("corpo-tabela").children)

    let tarefasFinalizadas = elementos.map((el) => el.childNodes[0].childNodes[0].checked).filter((finalizado) => finalizado).length

    document.getElementById("pendentes").textContent = elementos.length - tarefasFinalizadas

    document.getElementById("concluidas").textContent = tarefasFinalizadas

}

atualizarHeader()
