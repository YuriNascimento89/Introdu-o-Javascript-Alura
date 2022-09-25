console.log(`Condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo um item

// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo um item

// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(2, 1); //removendo um item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if( idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar")
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18); //operadores logicos possiveis
// console.log(idadeComprador < 18);  // menor
// console.log(idadeComprador <= 18); //menor ou gual
// console.log(idadeComprador >= 18); //maior ou igual
// console.log(idadeComprador == 18); // comparação

// if (se)
// else (senão)
// alt + Shift + F o codigo é formatado e identado.
// control + K + C