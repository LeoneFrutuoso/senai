// // exercicios while

// console.log("=================== SEÇÃO: WHILE ===================");

// // 1. Aclamação repetida
// {
//     console.log("--- 1. Aclamação repetida ---");
//     let palavra = prompt("Digite uma palavra para repetir 10 vezes:", "Sucesso");
//     let i = 1;
//     while (i <= 10) {
//         console.log(`${i}: ${palavra}`);
//         i++;
//     }
// }

// // 2. Somando números pares
// {
//     console.log("\n--- 2. Somando números pares ---");
//     let entrada = prompt("Digite um número limite para somar os pares:", "10");
//     let numeroLimite = Number(entrada);
//     let somaPares = 0;
//     let i = 2;
//     while (i <= numeroLimite) {
//         if (i % 2 === 0) {
//             somaPares += i;
//         }
//         i++;
//     }
//     console.log(`Soma dos pares até ${numeroLimite}: ${somaPares}`);
// }

// // 3. Lista de compras
// {
//     console.log("\n--- 3. Lista de compras ---");
//     let item = "";
//     console.log("Criando lista... (Digite 0 para parar)");
//     while (item !== "0") {
//         item = prompt("Digite um item para a lista (ou '0' para parar):");
//         if (item !== "0" && item !== null && item.trim() !== "") {
//             console.log(`Item adicionado: ${item}`);
//         }
//     }
// }

// // 4. Números ímpares inversos
// {
//     console.log("\n--- 4. Números ímpares inversos ---");
//     let entrada = prompt("Digite um número inicial para contagem regressiva:", "7");
//     let i = Number(entrada);
//     while (i >= 1) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//         i--;
//     }
// }

// // 5. Sequência de asteriscos
// {
//     console.log("\n--- 5. Sequência de asteriscos ---");
//     let linha = 1;
//     while (linha <= 5) {
//         let textoAsteriscos = "";
//         let ast = 1;
//         while (ast <= linha) {
//             textoAsteriscos += "*";
//             ast++;
//         }
//         console.log(textoAsteriscos);
//         linha++;
//     }
// }

// // 6. Jogo de adivinhação
// {
//     console.log("\n--- 6. Jogo de adivinhação ---");
//     let numeroSecreto = Math.floor(Math.random() * 100) + 1;
//     let palpite = null;
//     let tentativas = 0;
//     while (palpite !== numeroSecreto) {
//         let entrada = prompt("Tente adivinhar o número (1 a 100):");
//         palpite = Number(entrada);
//         tentativas++;
//         if (palpite < numeroSecreto) {
//             alert("Muito baixo!");
//         } else if (palpite > numeroSecreto) {
//             alert("Muito alto!");
//         }
//     }
//     console.log(`Acertou! Levou ${tentativas} tentativas.`);
// }

// // 7. Preenchendo um quadro
// {
//     console.log("\n--- 7. Preenchendo um quadro ---");
//     let largura = Number(prompt("Largura do quadro:", "4"));
//     let altura = Number(prompt("Altura do quadro:", "3"));
//     let l = 1;
//     while (l <= altura) {
//         let linhaQuadro = "";
//         let c = 1;
//         while (c <= largura) {
//             linhaQuadro += "#";
//             c++;
//         }
//         console.log(linhaQuadro);
//         l++;
//     }
// }


// // Exercícios com DO...WHILE

// console.log("\n=================== SEÇÃO: DO...WHILE ===================");

// // 1. Aclamação repetida
// {
//     console.log("--- 1. Aclamação repetida ---");
//     let palavra = prompt("Digite uma palavra para repetir 10 vezes:", "Foco");
//     let i = 1;
//     do {
//         console.log(`${i}: ${palavra}`);
//         i++;
//     } while (i <= 10);
// }

// // 2. Somando números pares
// {
//     console.log("\n--- 2. Somando números pares ---");
//     let entrada = prompt("Digite um número limite para somar os pares:", "10");
//     let numeroLimite = Number(entrada);
//     let somaPares = 0;
//     let i = 2;
//     do {
//         if (i % 2 === 0) {
//             somaPares += i;
//         }
//         i++;
//     } while (i <= numeroLimite);
//     console.log(`Soma dos pares até ${numeroLimite}: ${somaPares}`);
// }

// // 3. Lista de compras
// {
//     console.log("\n--- 3. Lista de compras ---");
//     let item;
//     console.log("Criando lista... (Digite 0 para parar)");
//     do {
//         item = prompt("Digite um item para a lista (ou '0' para parar):");
//         if (item !== "0" && item !== null && item.trim() !== "") {
//             console.log(`Item adicionado: ${item}`);
//         }
//     } while (item !== "0");
// }

// // 4. FizzBuzz (1 a 100)
// {
//     console.log("\n--- 4. FizzBuzz (1 a 100) ---");
//     let i = 1;
//     do {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//         i++;
//     } while (i <= 100);
// }

// // 5. Cálculo da Série (1 + 1/2 + 1/3 ... + 1/10)
// {
//     console.log("\n--- 5. Cálculo da Série ---");
//     let soma = 0;
//     let divisor = 1;
//     do {
//         soma += 1 / divisor;
//         divisor++;
//     } while (divisor <= 10);
//     console.log("O resultado da série é: " + soma);
// }

// // 6. Contar Pares e Ímpares com Limite
// {
//     console.log("\n--- 6. Contar Pares e Ímpares ---");
//     let entrada = prompt("Digite um número limite para contar pares e ímpares:", "20");
//     let limite = Number(entrada) || 20;
//     let i = 1;
//     let pares = 0;
//     let impares = 0;
//     do {
//         if (i % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//         i++;
//     } while (i <= limite);
//     console.log(`De 1 até ${limite} existem: \nPares: ${pares} \nÍmpares: ${impares}`);
// }

// // Exercícios com FOR


// console.log("\n=================== SEÇÃO: FOR ===================");

// // 1. Quadrado de cada número de 1 a 10
// {
//     console.log("--- 1. Quadrado dos números de 1 a 10 ---");
//     for (let i = 1; i <= 10; i++) { 
//         let quadrado = i * i;
//         console.log(`O quadrado de ${i} é: ${quadrado}`);
//     }
// }

// // 2. Ordem decrescente (10 a 1)
// {
//     console.log("\n--- 2. Ordem Decrescente (10 a 1) ---");
//     for (let i = 10; i >= 1; i--) { 
//         console.log(i);
//     }
// }

// // 3. Soma de 1 a 100
// {
//     console.log("\n--- 3. Soma de 1 a 100 ---");
//     let soma = 0;
//     for (let i = 1; i <= 100; i++) { 
//         soma += i;
//     }
//     console.log("A soma total de 1 a 100 é: " + soma);
// }

// // 4. Tabuada do 5
// {
//     console.log("\n--- 4. Tabuada do 5 ---");
//     let numero = 5;
//     for (let i = 1; i <= 10; i++) { 
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
// }

// // 5. Tabuada Personalizada
// {
//     console.log("\n--- 5. Tabuada Personalizada ---");
//     let entrada = prompt("Digite qual tabuada você deseja ver:");
//     let numeroUsr = Number(entrada);

//     if (isNaN(numeroUsr)) {
//         console.log("Opção inválida. Digite apenas números.");
//     } else {
//         console.log(`Tabuada do ${numeroUsr}:`);
//         for (let i = 1; i <= 10; i++) { 
//             console.log(`${numeroUsr} x ${i} = ${numeroUsr * i}`);
//         }
//     }
// }

// // 6. Números ímpares de 1 a 20
// {
//     console.log("\n--- 6. Números Ímpares de 1 a 20 ---");
//     for (let i = 1; i <= 20; i++) { 
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// // }

// // 7. Ordem Crescente e Decrescente (1 a 10) refeito e corrigido
// {
//     console.log("\n--- 7. Crescente e Decrescente de 1 a 10 ---");
//     console.log("Subindo:");
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
//     console.log("Descendo:");
//     for (let i = 10; i >= 1; i--) {
//         console.log(i);
//     }
//]