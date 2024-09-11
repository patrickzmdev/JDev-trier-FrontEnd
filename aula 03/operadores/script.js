//Operadores Lógicos

let a = true;
let b = false;
let c = "1";
let d = 1;

console.log(c == d);
console.log(c === d);

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);

//Operadores unários

let numero = 10;
let negativo = -numero;
console.log(negativo)

let verdadeiro = true;
console.log(!verdadeiro)

//contador
let contador = 0;
contador++;
console.log(contador)
contador--;
console.log(contador)

let texto = "texto";
let numero2 = 12;
let boole = true;

console.log(typeof texto)
console.log(typeof numero2)
console.log(typeof boole )

//Operadores Ternarios

const idade = 19;
let podeDirigir = idade >= 18 ? "pode" : "não pode";
console.log(`Ele ${podeDirigir} dirigir`)