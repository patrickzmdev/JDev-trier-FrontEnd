//contador

const button = document.getElementById("clickButton");
const countDisplay = document.getElementById("count");
const resetButton = document.getElementById("reset");

let count = 0;

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
})

resetButton.addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
})

//formulario

// Array para armazenar os dados dos usuários cadastrados
let listaUsuarios = [];

// Seleciona o formulário e a lista onde os dados serão exibidos
const formulario = document.getElementById('formulario');
const listaDados = document.getElementById('listaDados');
const buscaNome = document.getElementById('buscaNome');
const botaoBuscar = document.getElementById('buscar');
const botaoBuscarGenero = document.getElementById('buscarGenero');
const botaoInteresses = document.getElementById('buscarInteresses');

// Função que lida com o envio do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const idade = document.getElementById('idade').value;
    const nascimento = document.getElementById('nascimento').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;

    // Captura os interesses marcados (checkbox)
    const interesses = [];
    document.querySelectorAll('input[name="interesses"]:checked').forEach((checkbox) => {
        interesses.push(checkbox.value);
    });

    const pais = document.getElementById('pais').value;

    // Cria um objeto com os dados do usuário
    const usuario = {
        nome,
        email,
        senha,
        idade,
        nascimento,
        genero,
        interesses,
        pais
    };

    // Adiciona o usuário à lista
    listaUsuarios.push(usuario);

    // Limpa o formulário
    formulario.reset();

    // Atualiza a lista de dados exibida
    exibirUsuarios(listaUsuarios);
});

// Função para exibir os usuários cadastrados na página
function exibirUsuarios(usuarios) {
    // Limpa a lista antes de renderizar
    listaDados.innerHTML = '';

    // Renderiza cada usuário cadastrado na lista
    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Usuário ${index + 1}:</strong><br>
            Nome: ${usuario.nome} <br>
            Email: ${usuario.email} <br>
            Idade: ${usuario.idade} <br>
            Data de Nascimento: ${usuario.nascimento} <br>
            Gênero: ${usuario.genero} <br>
            Interesses: ${usuario.interesses.join(', ')} <br>
            País: ${usuario.pais}
        `;
        listaDados.appendChild(li);
    });
}

// Função para buscar usuários pelo nome
botaoBuscar.addEventListener('click', function() {
    const nomeBusca = buscaNome.value.toLowerCase();

    // Filtra os usuários cujo nome contém o texto digitado
    const usuariosFiltrados = listaUsuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(nomeBusca)
    );

    // Exibe apenas os usuários filtrados
    exibirUsuarios(usuariosFiltrados);
});

botaoBuscarGenero.addEventListener('click', function() {
  // Verifica qual gênero foi selecionado
  const generoBusca = document.querySelector('input[name="buscaGenero"]:checked');

  // Filtra os usuários
  const usuariosFiltrados = listaUsuarios.filter(usuario => {
      const generoCondicao = generoBusca ? usuario.genero === generoBusca.value : true; // Se o gênero for selecionado, filtra pelo valor

      // Retorna o usuário se o nome e/ou gênero corresponderem
      return generoCondicao;
  });

  // Exibe apenas os usuários filtrados
  exibirUsuarios(usuariosFiltrados);
});

botaoInteresses.addEventListener('click', function() {
  const interessesBusca = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        interessesBusca.push(checkbox.value);
    });

     // Filtra os usuários
     const usuariosFiltrados = listaUsuarios.filter(usuario => {


      // Verifica se os interesses do usuário incluem todos os interesses buscados
      const interessesCondicao = interessesBusca.every(interesse =>
          usuario.interesses.includes(interesse)
      );

      // Retorna o usuário se o nome, gênero, e interesses corresponderem
      return interessesCondicao;
  });

  // Exibe apenas os usuários filtrados
  exibirUsuarios(usuariosFiltrados);
});
