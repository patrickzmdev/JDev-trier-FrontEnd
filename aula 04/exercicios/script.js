let listaTarefas = [];
let contador = listaTarefas.length + 1;


function mostrarTarefas(listaTarefas){
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = '';
    for(const tarefa of listaTarefas){
        let linha = document.createElement("tr");

        let id = document.createElement("td");
        id.textContent = tarefa.id;

        let nome = document.createElement("td");
        nome.textContent = tarefa.nome;

         
        let statusTarefa = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.statusTarefa === "true"; 

        checkbox.addEventListener("change", function(){
            concluirTarefa(tarefa, checkbox, linha);
        });

        statusTarefa.appendChild(checkbox);

        let botaoExcluir = document.createElement("button");
        botaoExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="red" fill="currentColor" class="bi bi-trash lixeira" viewBox="0 0 16 16">
                                      <path d="M5.5 5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 .5-.5v-1h4v1a.5.5 0 0 0 .5.5H13.5a1 1 0 0 1 1 1v1zm-11-1v1h11V2h-11z"/>
                                  </svg>`;

        botaoExcluir.addEventListener("click", function () {
                removerTarefa(tarefa.id);
        });

        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(statusTarefa);
        linha.appendChild(botaoExcluir);

        tableBody.appendChild(linha)
    }
    atualizarContadores();
}

function adicionarTarefa() {
            
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa.trim() === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    statusTarefaCriada = "false";

            
    const tarefaNova = {
        id: contador,
        nome: tarefa,
        statusTarefa: statusTarefaCriada
    };

    listaTarefas.push(tarefaNova);
    contador++;

    console.log(listaTarefas);

    document.getElementById('tarefa').value = ''; //limpar campo

    mostrarTarefas(listaTarefas);
    atualizarContadores();
}

function concluirTarefa(tarefa, checkbox, linha) {
    tarefa.statusTarefa = checkbox.checked ? "true" : "false";

    if (tarefa.statusTarefa === "true") {
        checkbox.disabled = true;
        linha.style.backgroundColor = "lightgreen";
    }

    atualizarContadores();
}

function removerTarefa(id){
    listaTarefas = listaTarefas.filter(tarefa => tarefa.id !== id);
    mostrarTarefas(listaTarefas);
}

function removerTarefasConcluidas(){
    listaTarefas = listaTarefas.filter(tarefa => tarefa.statusTarefa !== "true");
    mostrarTarefas(listaTarefas);
}

function atualizarContadores() {
    const tarefasConcluidasCount = listaTarefas.filter(tarefa => tarefa.statusTarefa === "true").length;
    const tarefasPendentesCount = listaTarefas.filter(tarefa => tarefa.statusTarefa === "false").length;
    
    document.getElementById('tarefas-concluidas-count').textContent = tarefasConcluidasCount;
    document.getElementById('tarefas-pendentes-count').textContent = tarefasPendentesCount;
}