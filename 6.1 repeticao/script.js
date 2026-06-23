 //Faça um programa que calcule o quadrado de cada número de 1 a 10.


// let i = 0
// while(i < 10){
// i++
// let resultado = i * i
//  alert (resultado)
// }



//Imprima os números de 10 a 1 em ordem decrescente.
// let i = 0
// while(i < 10){
//  i++

// }



// //todos numeros impares de 1 a 20
// let i = 0
// while (i<20) {
//  i++
//  if(i%2 != 0) {
// //i dividido  por 2 restante diferente 0 motra numero impar
 
// }

// console (i)

// }


// 🐱‍🏍Imprima os números de 10 a 1 em ordem decrescente.

// let i = 10
// while(i<10){
//   console.log(i) 
// i--
// }


// 1. Utilize um for para calcular a soma dos números de 1 até 10 e exiba o resultado
// let soma = 0
// for (let i = 1; i <= 10; i++){
// soma +=i;
// console.log(soma)
// }
//  console.log("a soma total è " + soma)


// 2. Crie um programa que mostre a tabuada do número 5, de 5 × 1 até 5 × 10,

// let tabuada = 5
// for (let i = 1; i <=10; i++){
  
//   console.log(  tabuada * i)
// }

// console.log("o Resultado é igual" + tabuada);


//  Utilize um for para mostrar o quadrado dos números de 1 até 10.

// let quadrado = 1    criar variavel
//  for (let i = 1; i <= 10; i++){ 
//  //console.log(quadrado =  i * i )
// let resultado = i*i
//  //console.log(i +" multiplicado por " + i + " = "  +resultado)
 

// }

//Considere a palavra “JavaScript”. Utilize um for para exibir cada letra da palavra em uma linha diferente.

// 

let palavra = "javascript";
let resultado = ""; // Começa vazia para podermos somar as letras nela
let divResultado = document.getElementById("Resultado"); // O ID do seu HTML

// O loop passa de letra em letra
for (let i = 0; i < palavra.length; i++) {
    // Pegamos a letra atual e somamos com uma quebra de linha HTML
    resultado += palavra[i] + "<br>";
}

// SÓ AGORA, fora do for, colocamos o resultado final na tela
divResultado.innerHTML = resultado;

