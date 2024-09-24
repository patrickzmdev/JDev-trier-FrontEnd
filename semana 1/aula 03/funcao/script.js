function printString(texto){
    console.log(texto);
}

var fPrintTexto = (texto) => {
    return "Hello World"
}

printString("Hello World")
console.log(fPrintTexto())

function calcula(a,b,c){
    return ((a+b)/c).toFixed(2);
}

console.log (calcula(40,5,2));

const palavra1 = "Aula";
const palavra2 = "FrontEnd";

var fPrintPalavra = () => {
    return palavra1 + " de " + palavra2 
}

console.log(fPrintPalavra())

var fPrintPalavra2 = (palavra1, palavra2) => {
    return palavra1 + " de " + palavra2
}

console.log(fPrintPalavra("Aula", "FrontEnd"))

