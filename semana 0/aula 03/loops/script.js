for (let index = 0; index < 10; index++){
    console.log(index);
}

const lista3 = [{id: 1, ativo: true}, {id: 2, ativo: false}, {id: 3, ativo: true}, {id: 4, ativo: false}];

for( const item of lista3) {
    console.log(item);
}

for(const index in lista3) {
    console.log(index, lista3[index])
}

lista3.forEach(item => {
    console.log(item);
})

let count = 0;
while(count < 10){
    count++
    console.log(count);
}

//const meuInput = prompt("Este é meu imput");
//console.log(meuInput);
