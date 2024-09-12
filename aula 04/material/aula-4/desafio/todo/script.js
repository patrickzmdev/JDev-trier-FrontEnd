function updateCounters() {
    const lista = document.getElementsByTagName('ul')[0];
    const itensLista = lista.querySelectorAll('li');
    let checks = 0;
    for (const item of itensLista) {
        if (item.querySelector('input').checked) {
            checks++;
        }
    }

    document.getElementById('countChecks').textContent = checks;
    document.getElementById('nonChecks').textContent = itensLista.length - checks;
}

function clearCheckeds() {
    const lista = document.getElementsByTagName('ul')[0];
    const itensLista = lista.querySelectorAll('li');
    for (const item of itensLista) {
        if (item.querySelector('input').checked) {
            lista.removeChild(item);
        }
    }
    updateCounters();
}

function clearNonCheckeds() {
    const lista = document.getElementsByTagName('ul')[0];
    const itensLista = lista.querySelectorAll('li');
    for (const item of itensLista) {
        if (!item.querySelector('input').checked) {
            lista.removeChild(item);
        }
    }
    updateCounters();
}

function changeChecked(event) {
    updateCounters();
}

function deleteTask(event) {
    const lista = document.getElementsByTagName('ul')[0];
    lista.removeChild(event.currentTarget.parentElement.parentElement);
    updateCounters();
}

function createTask(event) {
    event.preventDefault();
    const input = document.getElementById('inputTarefa');
    const lista = document.getElementsByTagName('ul')[0];
    lista.appendChild(getTask(input.value));
    input.value = '';
    updateCounters();
}

function getTask(label) {
    const divInfos = document.createElement('div');
    divInfos.appendChild(getCheck());
    divInfos.appendChild(getLabel(label));
    const divActions = document.createElement('div');
    divActions.appendChild(getTrashAction());
    const novoItem = document.createElement(`li`);
    novoItem.append(divInfos);
    novoItem.append(divActions);

    novoItem.addEventListener('mouseover', showTrash, false);
    novoItem.addEventListener('mouseleave', hideTrash, false);
    return novoItem;
}

function getLabel(label) {
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    return labelElement
}

function getCheck() {
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.name = 'check';
    inputElement.classList.add('check');

    inputElement.addEventListener('change', changeChecked, false);
    return inputElement;
}

function getTrashAction() {
    const trashElement = document.createElement('i');
    trashElement.classList.add('fa', 'fa-trash');
    return trashElement;
}

function showTrash(event) {
    const li = event.currentTarget ;
    const lixeira = li.getElementsByClassName('fa-trash')[0];
    lixeira.addEventListener('click', deleteTask, false);
    lixeira.style.visibility = 'visible';
}

function hideTrash(event) {
    const li = event.target;
    const lixeira = li.getElementsByClassName('fa-trash')[0];
    lixeira.style.visibility = 'hidden';
}