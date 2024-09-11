const lista = [1,2,3,4,5];
console.log(lista);

lista.push(6);
console.log(lista);

lista.unshift(0);
console.log(lista);

lista.pop();
console.log(lista); //tira do final da lista

lista.shift();  
lista.shift();   
console.log(lista); //tira do inicio da lista

const obj = {id:4};
const lista2 = [{id: 1}, {id: 2}, {id: 3}, obj];

console.log(lista2.find(item => item.id == 2)); //find
console.log(lista2.findIndex(item => item.id == 3));
console.log(lista2.indexOf(obj));
console.log(lista2.some(item => item.id == 1)); //se possui algum com esse valor
console.log(lista2.every(item => item.id == 1)); //se todos os ids forem iguais
console.log(lista2.includes(obj)); // se inclui na lista


const lista3 = [{id: 1, ativo: true}, {id: 2, ativo: false}, {id: 3, ativo: true}, {id: 4, ativo: false}];
console.log(lista3.filter(item => item.ativo == true)); // filtra com base nos atributos


