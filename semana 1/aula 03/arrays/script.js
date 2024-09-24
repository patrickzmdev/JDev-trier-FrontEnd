//Métodos de Adição e Remoção

const lista = [1,2,3,4,5];
console.log(lista);

lista.push(6);//adiciona ao final
console.log(lista);

lista.unshift(0);
console.log(lista);//adiciona no inicio

lista.pop();
console.log(lista); //tira do final da lista

lista.shift();
lista.shift();
console.log(lista); //tira do inicio da lista

const obj = {id:4};
const lista2 = [{id: 1}, {id: 2}, {id: 3}, obj];

//Métodos de Acesso

console.log(lista2.find(item => item.id == 2));  //Retorna o primeiro item que satisfaz a condição dada pela função
console.log(lista2.findIndex(item => item.id == 3));// Retorna o índice do primeiro item que satisfaz a condição.
console.log(lista2.indexOf(obj)); //Retorna o índice da primeira ocorrência do elemento. (Cuidado: não funciona bem para objetos).
console.log(lista2.some(item => item.id == 1)); // Retorna true se ao menos um elemento satisfaz a condição.
console.log(lista2.every(item => item.id == 1)); //Retorna true se todos os elementos satisfazem a condição.
console.log(lista2.includes(obj)); // se inclui na lista Retorna true se o array contém o elemento. (Funciona melhor para valores primitivos como números e strings).

const lista3 = [{id: 1, ativo: true}, {id: 2, ativo: false}, {id: 3, ativo: true}, {id: 4, ativo: false}];
console.log(lista3.filter(item => item.ativo == true)); // filtra com base nos atributos

//Métodos de Transformação

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2); // map(callback) - Retorna um novo array com o resultado de aplicar a função callback em cada elemento.


const ativos = lista3.filter(item => item.ativo); //filter(callback) - Retorna um novo array contendo apenas os elementos que satisfazem a condição.

const soma = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0); //reduce(callback, valorInicial) - Reduz o array a um único valor, acumulando o resultado da função callback a partir de um valor inicial.


//Métodos de Ordenação

const numeros2 = [10, 3, 2, 7, 5]; //sort([comparador]) - Ordena os elementos do array no lugar (modifica o array original). Por padrão, ordena como strings. Para números ou critérios mais complexos, é necessário passar uma função comparadora.
numeros2.sort((a, b) => a - b); // [2, 3, 5, 7, 10]

numeros.reverse(); //reverse() - Inverte a ordem dos elementos no array.

//Métodos de Manipulação

const parte = [1, 2, 3, 4, 5].slice(1, 3); // [2, 3] //slice(inicio, fim) - Retorna uma cópia superficial de parte do array entre os índices inicio (inclusivo) e fim (exclusivo).

//Concatenar e Combinar
const arr1 = [1, 2]; //concat(...arrays) - Retorna um novo array combinando o array original com os arrays passados como argumentos.
const arr2 = [3, 4];
const combinado = arr1.concat(arr2); // [1, 2, 3, 4]

//const numeros = [1, 2, 3]; //join(separador) - Junta todos os elementos do array em uma string, usando o separador fornecido
const stringNumeros = numeros.join('-'); // "1-2-3"

//Tamanho do Array
const arr = [1, 2, 3]; //length - Retorna ou define o número de elementos no array
console.log(arr.length); // 3
arr.length = 2; // [1, 2]

//Array Destructuring (Desestruturação)
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5]; //É possível extrair valores de um array em variáveis individuais:
console.log(primeiro); // 1
console.log(resto); // [3, 4, 5]

//Métodos de Iteração
//const numeros = [1, 2, 3]; //forEach(callback) - Executa uma função para cada elemento do array.
numeros.forEach(num => console.log(num * 2)); // 2 4 6

//Flat e FlatMap
const arr = [1, [2, [3, 4]]]; //flat(nível) - Achata arrays multidimensionais em um único nível (por padrão) ou mais níveis se especificado.
console.log(arr.flat(2)); // [1, 2, 3, 4]

const arr = [1, 2, 3]; //flatMap(callback) - Aplica um map a cada elemento e depois achata o resultado em um array
console.log(arr.flatMap(num => [num, num * 2])); // [1, 2, 2, 4, 3, 6]
