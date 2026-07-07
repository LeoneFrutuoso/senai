let produtos =  ["meia", "pa de corte", "suco de manga", "leite"]
let precos = [665,9999,777,12];

function aumentarPreco() {
for (let i = 0; i < precos.length; i++) {
    precos[i] = precos[i] * 4;
}
}

function adicionarProduto() {
let preco , produto;
do{
    produto = prompt("Digite o nome do produto");

}while (produto=='');


do{
    preco = Number(prompt("Digite o preço do produto"));

} while(preco <= 0 )

    
produtos.push(produto);
precos.push(preco);
verProdutosComPrecos();


}




// function verProdutos() {
// //console.log(produtos)
// for (let i = 0; i < produtos.length; i++) {
//     document.getElementById('listaProdutos').innerHTML += '<p>'+ i + " °: " + produtos[i] + '</p>';
// }
// }

// function verProdutosComPrecos() {
    
//     for (let i = 0; i < produtos.length; i++) {
//         document.getElementById('listaProdutos').innerHTML += 
//         '<p>'+ i + " °: " + produtos[i] + " - R$ " + precos[i].toFixed(2).replace('.', ',')+ '</p>';
//     }
// }

// function removerUltimoProduto() {
// produtos.pop(); 
// precos.pop();
// verProdutosComPrecos();



// }


// let idades = [22, 34, 44, 55, 66, 77, 99, 11];
// function rodarDemo() {
//     let valor =Number(prompt("valor pra remover"));
//     let pos = idades.indexOf(valor)
//     // let filtrado = idades.filter(idades => idades != valor);
//     // let idades = idades.filter(idade => idade <40);
//     // console.log(filtrado)
// }

//Crie um array com os dias da semana.
// let diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
// console.log(diasDaSemana)
// console.log(diasDaSemana[0]) // domingo
// console.log(diasDaSemana[6]) // sábado

// let diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
// document.getElementById("diasDaSemana") .innerHTML =  diasDaSemana.join("<br>");
 
// remover o ultimo elemento do array
//let diasDaSemana2 = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "feriado"];
//console.log(diasDaSemana2 .join("<br>"));
// function verDiasDaSemana() {
//     document.getElementById("diasDaSemana").innerHTML = diasDaSemana2.join("<br>");
//     diasDaSemana2.pop();
// }
   
//  let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//  console.log(numerosPares)

//  //Substitua o terceiro elemento do array de números pares por 12.
// numerosPares[2] = 12;
// console.log(numerosPares);
// //Substitua o sexto elemento do array de números pares por 50.
// numerosPares[6] =50;
// console.log(numerosPares);


//Dado o array ['banana', 'maçã', 'uva'], adicione 'morango' no final.
let frutas = ['banana', 'maçã', 'uva'];
frutas.push('morango');
console.log(frutas);
frutas.push('abacaxi');
console.log(frutas);