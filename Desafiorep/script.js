// 7.7 -  Aquecimento de repetição

// Crie um programa para executar a sequência abaixo:

// - Contar de 0 até 250 mostrando o valor no HTML;
// - Escrever no HTML “MANHÊ, ACABEI O PRIMEIRO”;
// - Contar de 250 até 100 mostrando o valor no HTML;
// - Escrever no HTML “MANHÊ, ACABEI O SEGUNDO”;
// - Contar de 5 em 5, do 100 até o 0, mostrando os valores no HTML;
// - Escrever no HTML “MANHÊ, ACABEI O TERCEIRO”;
// - Contar de 3 em 3, do 0 até 9500, mostrando os valores no HTML;
// - Escrever no HTML “MANHÊ, ACABEI O QUARTO”;
// - Contar do 9500 até o 9600 mostrando no HTML apenas os números pares;
// - Escrever no HTML “MANHÊ, ACABEI MAIS UM”;
// - Contar do 9600 ao 10285 mostrando no HTML apenas os números ímpares;
// - Escrever no HTML “MANHÊ, ACABEI TUDOOO. POSSO JOGAR BOLA?!”.


/*******************************************************************************
 * EXERCÍCIO 7.7: Versão em Linha Corrida (Sem quebras de linha entre os números)
 * * Trocamos o "<br>" por ", " ou " " dentro dos loops para os números 
 * continuarem na mesma linha.
 *******************************************************************************/

// --- PARTE 1: Contar de 0 até 250 ---
// {
//     let conteudo = ""; 
//     for (let i = 0; i <= 250; i++) {
//         conteudo += i + " "; // Adiciona o número e apenas um espaço em branco
//     }
//     // No final da contagem, colocamos quebras de linha (<br>) para separar a frase
//     conteudo += "<br><b>MANHÊ, ACABEI O PRIMEIRO</b><br><br>"; 
//     document.body.innerHTML += conteudo; 
// }

// // --- PARTE 2: Contar de 250 até 100 ---
// {
//     let conteudo = ""; 
//     for (let i = 250; i >= 100; i--) {
//         conteudo += i + " "; // Apenas espaço para continuar na mesma linha
//     }
//     conteudo += "<br><b>MANHÊ, ACABEI O SEGUNDO</b><br><br>"; 
//     document.body.innerHTML += conteudo; 
// }

// // --- PARTE 3: Contar de 5 em 5, do 100 até o 0 ---
// {
//     let conteudo = ""; 
//     for (let i = 100; i >= 0; i -= 5) {
//         conteudo += i + " "; 
//     }
//     conteudo += "<br><b>MANHÊ, ACABEI O TERCEIRO</b><br><br>"; 
//     document.body.innerHTML += conteudo;
// }

// // --- PARTE 4: Contar de 3 em 3, do 0 até 9500 ---
// {
//     let conteudo = ""; 
//     for (let i = 0; i <= 9500; i += 3) {
//         conteudo += i + " "; 
//     }
//     conteudo += "<br><b>MANHÊ, ACABEI O QUARTO</b><br><br>"; 
//     document.body.innerHTML += conteudo;
// }

// // --- PARTE 5: Contar do 9500 até o 9600 (Apenas os números PARES) ---
// {
//     let conteudo = ""; 
//     for (let i = 9500; i <= 9600; i++) {
//         if (i % 2 === 0) { 
//             conteudo += i + " "; 
//         }
//     }
//     conteudo += "<br><b>MANHÊ, ACABEI MAIS UM</b><br><br>"; 
//     document.body.innerHTML += conteudo;
// }

// // --- PARTE 6: Contar do 9600 ao 10285 (Apenas os números ÍMPARES) ---
// {
//     let conteudo = ""; 
//     for (let i = 9600; i <= 10285; i++) {
//         if (i % 2 !== 0) { 
//             conteudo += i + " "; 
//         }
//     }
//     conteudo += "<br><b>MANHÊ, ACABEI TUDOOO. POSSO JOGAR BOLA?!</b><br>"; 
//     document.body.innerHTML += conteudo;
// }




// Crie uma contagem de 10 até 500, depois de 900 até 1000, usando apenas um laço de repetição.

// ➕

// Exemplinho explicadinho:

// A saída será uma lista de números formada pelos dois segmentos mencionados, algo como “10, 11, 12, (…), 498, 499, 500, 900, 901, 902, (…), 999, 1000”

// 7.12

// 7.12 - Faça um algoritmo que:

// leia vários números e,

// informe quantos números entre 100 e 200 foram digitados (o 100 e o 200 não contam),

// pare as leituras quando o valor 0 (zero) for lido.

// 7.13

// 7.13 - Faça um algoritmo que leia dois números e mostre todos os números pares contidos entre eles.

// Exemplo:

// Limite inferior: 3

// Limite superior: 12

// Saída: 4 6 8 10

// 7.14

// 7.14 – Tá, mas e se os números digitados para esse 
// 7.13 aí não estiverem em ordem crescente? Seria possível criar um algoritmo que funcionasse automaticamente tanto pra subir quanto pra descer?



/*******************************************************************************
 * EXERCÍCIO 1: Contagem de 10 a 500 e depois de 900 a 1000 com APENAS UM laço
 * * Truque lógico: O laço 'for' vai passar por todos os números de 10 a 1000.
 * Dentro dele, usamos um 'if' para só mostrar os números que estão nos blocos que queremos.
 * Quando o número estiver entre 501 e 899, o código simplesmente ignora e pula.
 *******************************************************************************/
{
    let conteudo = "<b>Exercício 1 (Saltando bloco):</b><br>"; 
    
    // O loop começa no 10 e vai varrendo até o 1000, de 1 em 1
    for (let i = 10; i <= 1000; i++) {
        // CONDIÇÃO: Se o número for menor ou igual a 500 OU se for maior ou igual a 900
        if (i <= 500 || i >= 900) {
            conteudo += i + " "; // Adiciona o número e um espaço do lado
        }
    }
    conteudo += "<br><br><hr>"; // Linha divisória para o próximo exercício
    document.body.innerHTML += conteudo; // Despeja no HTML
}

