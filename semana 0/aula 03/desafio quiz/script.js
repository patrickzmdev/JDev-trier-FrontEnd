const quizData = [
  {
    question: "O que significa JVM em Java?",
    options: ["Java Virtual Machine", "Java Volume Manager", "Java Value Method", "Java Variable Module"],
    answer: "Java Virtual Machine"
  },
  {
    question: "Qual é a palavra-chave usada para herdar uma classe em Java?",
    options: ["inherits", "implements", "extends", "inherit"],
    answer: "extends"
  },
  {
    question: "Qual é o valor padrão de uma variável boolean em Java?",
    options: ["true", "false", "null", "undefined"],
    answer: "false"
  },
  {
    question: "Qual a diferença entre == e .equals() ao comparar objetos em Java?",
    options: ["Não há diferença", "== compara o conteúdo e .equals() compara a referência", "== compara a referência e .equals() compara o conteúdo", "Ambos comparam a referência"],
    answer: "== compara a referência e .equals() compara o conteúdo"
  },
  {
    question: "Qual é o modificador de acesso que permite que uma variável seja acessada apenas dentro da própria classe?",
    options: ["public", "protected", "private", "default"],
    answer: "private"
  },
  {
    question: "Qual das seguintes palavras-chave impede que uma classe seja estendida?",
    options: ["static", "abstract", "final", "protected"],
    answer: "final"
  },
  {
    question: "O que é um construtor em Java?",
    options: ["Um tipo de método especial usado para inicializar objetos", "Um método normal que retorna valores", "Uma variável que armazena valores de classe", "Um loop que inicializa variáveis"],
    answer: "Um tipo de método especial usado para inicializar objetos"
  },
  {
    question: "Qual é a saída do seguinte código? System.out.println(10/3)",
    options: ["3.3333", "3", "3.0", "Erro de compilação"],
    answer: "3"
  },
  {
    question: "Qual coleção em Java não permite elementos duplicados?",
    options: ["List", "Set", "Map", "Array"],
    answer: "Set"
  },
  {
    question: "O que a palavra-chave this faz em Java?",
    options: ["Se refere à classe pai", "Se refere ao objeto atual da classe", "Se refere à superclasse", "Se refere a variáveis estáticas"],
    answer: "Se refere ao objeto atual da classe"
  }
];

const questionsContainer = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const result = document.getElementById('result');

// Função para embaralhar perguntas
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Exibir perguntas aleatoriamente
function loadQuiz() {
  const shuffledQuiz = shuffle(quizData);
  shuffledQuiz.forEach((data, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `
      <p>${index + 1}. ${data.question}</p>
      ${data.options
        .map(
          (option) => `
        <label>
          <input type="radio" name="question${index}" value="${option}">
          ${option}
        </label>
      `
        )
        .join("")}
    `;
    questionsContainer.appendChild(questionDiv);
  });
}

// Verificar respostas e exibir resultado
function checkAnswers() {
  let score = 0;
  const userAnswers = document.querySelectorAll('input[type="radio"]:checked');

  userAnswers.forEach((answer, index) => {
    const questionDiv = answer.closest('div');
    const correctAnswer = quizData[index].answer;

    if (answer.value === correctAnswer) {
      score++;
      questionDiv.classList.add('correct');
    } else {
      questionDiv.classList.add('incorrect');
    }
  });

  result.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

// Resetar o quiz
function resetQuiz() {
  questionsContainer.innerHTML = '';
  result.textContent = '';
  loadQuiz();
}

// Eventos de clique
submitBtn.addEventListener('click', checkAnswers);
resetBtn.addEventListener('click', resetQuiz);

// Carregar o quiz ao iniciar
loadQuiz();
