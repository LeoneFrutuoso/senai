// /*******************************************************************************
//  * =============================================================================
//  * SEÇÃO 1: TODOS OS EXERCÍCIOS USANDO APENAS 'WHILE'
//  * =============================================================================
//  *******************************************************************************/

console.log("=================== INICIANDO SEÇÃO: WHILE ===================");

/*** EXERCÍCIO 1: Aclamação repetida (WHILE) ***/
{
    console.log("--- 1. Aclamação repetida (While) ---");
    let palavra = prompt("Digite uma palavra para repetir 10 vezes (While):", "Sucesso");
    let i = 1; // Inicializa o contador em 1
    while (i <= 10) { // Testa se i é menor ou igual a 10 antes de entrar
        console.log(`${i}: ${palavra}`); // Imprime a repetição
        i++; // Soma +1 para avançar o loop
    }
}

// /*** EXERCÍCIO 2: Somando números pares (WHILE) ***/
// {
//     console.log("\n--- 2. Somando números pares (While) ---");
//     let entrada = prompt("Digite um número limite para somar os pares (While):", "10");
//     let numeroLimite = Number(entrada);
//     let somaPares = 0; // Acumulador da soma
//     let i = 2; // Começa no primeiro número par válido (2)
//     while (i <= numeroLimite) { // Testa o limite antes de rodar
//         if (i % 2 === 0) { // Se o resto da divisão por 2 for zero, é par
//             somaPares += i; // Adiciona ao total
//         }
//         i++; // Passa para o próximo número da sequência
//     }
//     console.log(`Soma dos pares até ${numeroLimite}: ${somaPares}`);
// }

// /*** EXERCÍCIO 3: Lista de compras (WHILE) ***/
// {
//     console.log("\n--- 3. Lista de compras (While) ---");
//     let item = ""; // Inicializa a variável com texto vazio para o teste do while não quebrar de início
//     console.log("Criando lista... (Digite 0 para parar)");
//     while (item !== "0") { // Testa se é diferente de '0' ANTES de pedir o item
//         item = prompt("While - Digite um item para a lista (ou '0' para parar):");
//         if (item !== "0" && item !== null && item.trim() !== "") {
//             console.log(`Item adicionado: ${item}`);
//         }
//     }
// }

// /*** EXERCÍCIO 4: Números ímpares inversos (WHILE) ***/
// {
//     console.log("\n--- 4. Números ímpares inversos (While) ---");
//     let entrada = prompt("Digite um número inicial para contagem regressiva (While):", "7");
//     let i = Number(entrada); // O contador 'i' começa no número alto digitado pelo usuário
//     while (i >= 1) { // Testa se ainda não chegou a 1
//         if (i % 2 !== 0) { // Se o resto da divisão por 2 for diferente de zero, é ímpar
//             console.log(i); // Imprime o número ímpar
//         }
//         i--; // Diminui o contador para descer a sequência
//     }
// }

// /*** EXERCÍCIO 5: Sequência de asteriscos (WHILE) ***/
// {
//     console.log("\n--- 5. Sequência de asteriscos (While) ---");
//     let linha = 1; // Contador de linhas (vai de 1 a 5)
//     while (linha <= 5) { // Controla a quantidade de linhas horizontais
//         let textoAsteriscos = ""; // Reseta a linha de texto
//         let ast = 1; // Contador interno de asteriscos para a linha atual
//         while (ast <= linha) { // Coloca asteriscos baseado no número da linha atual
//             textoAsteriscos += "*"; // Junta o asterisco
//             ast++; // Incrementa o gerador de asteriscos da linha
//         }
//         console.log(textoAsteriscos); // Exibe a linha montada
//         linha++; // Passa para a próxima linha vertical
//     }
// }

// /*** EXERCÍCIO 6: Jogo de adivinhação (WHILE) ***/
// {
//     console.log("\n--- 6. Jogo de adivinhação (While) ---");
//     let numeroSecreto = Math.floor(Math.random() * 100) + 1;
//     let palpite = null; // Inicializa vazio para passar no teste inicial do while
//     let tentativas = 0;
//     while (palpite !== numeroSecreto) { // Testa se o jogador errou antes de pedir outro chute
//         let entrada = prompt("While - Tente adivinhar o número (1 a 100):");
//         palpite = Number(entrada);
//         tentativas++;
//         if (palpite < numeroSecreto) {
//             alert("Muito baixo!");
//         } else if (palpite > numeroSecreto) {
//             alert("Muito alto!");
//         }
//     }
//     console.log(`Acertou no While! Levou ${tentativas} tentativas.`);
// }

// /*** EXERCÍCIO 7: Preenchendo um quadro (WHILE) ***/
// {
//     console.log("\n--- 7. Preenchendo um quadro (While) ---");
//     let largura = Number(prompt("Largura do quadro (While):", "4"));
//     let altura = Number(prompt("Altura do quadro (While):", "3"));
//     let l = 1; // Inicializa o controle de linhas
//     while (l <= altura) { // Loop que controla a altura (linhas)
//         let linhaQuadro = ""; // Limpa a linha atual
//         let c = 1; // Inicializa o controle de colunas
//         while (c <= largura) { // Loop interno que desenha a largura (colunas)
//             linhaQuadro += "#"; // Adiciona o preenchimento
//             c++; // Avança para a próxima coluna
//         }
//         console.log(linhaQuadro); // Cospe a linha pronta na tela
//         l++; // Passa para a próxima linha
//     }
// }


// /*******************************************************************************
//  * =============================================================================
//  * SEÇÃO 2: TODOS OS EXERCÍCIOS USANDO APENAS 'DO...WHILE'
//  * =============================================================================
//  *******************************************************************************/

// console.log("\n=================== INICIANDO SEÇÃO: DO...WHILE ===================");

// /*** EXERCÍCIO 1: Aclamação repetida (DO...WHILE) ***/
// {
//     console.log("--- 1. Aclamação repetida (Do...While) ---");
//     let palavra = prompt("Digite uma palavra para repetir 10 vezes (Do...While):", "Foco");
//     let i = 1;
//     do {
//         console.log(`${i}: ${palavra}`);
//         i++;
//     } while (i <= 10); // Avalia se continua apenas no FINAL da execução
// }

// /*** EXERCÍCIO 2: Somando números pares (DO...WHILE) ***/
// {
//     console.log("\n--- 2. Somando números pares (Do...While) ---");
//     let entrada = prompt("Digite um número limite para somar os pares (Do...While):", "10");
//     let numeroLimite = Number(entrada);
//     let somaPares = 0;
//     let i = 2;
//     do {
//         if (i % 2 === 0) {
//             somaPares += i;
//         }
//         i++;
//     } while (i <= numeroLimite); // Avalia se continua apenas no FINAL
//     console.log(`Soma dos pares até ${numeroLimite}: ${somaPares}`);
// }

// /*** EXERCÍCIO 3: Lista de compras (DO...WHILE) ***/
// {
//     console.log("\n--- 3. Lista de compras (Do...While) ---");
//     let item;
//     console.log("Criando lista... (Digite 0 para parar)");
//     do {
//         // Roda o prompt primeiro sem testar nada antes, ideal para coletas
//         item = prompt("Do...While - Digite um item para a lista (ou '0' para parar):");
//         if (item !== "0" && item !== null && item.trim() !== "") {
//             console.log(`Item adicionado: ${item}`);
//         }
//     } while (item !== "0"); // Só agora testa se o usuário digitou '0' para fechar
// }

// /*** EXERCÍCIO 4: Números ímpares inversos (DO...WHILE) ***/
// {
//     console.log("\n--- 4. Números ímpares inversos (Do...While) ---");
//     let entrada = prompt("Digite um número inicial para contagem regressiva (Do...While):", "7");
//     let i = Number(entrada);
//     do {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//         i--;
//     } while (i >= 1); // Avalia a parada no final da rodada
// }

// /*** EXERCÍCIO 5: Sequência de asteriscos (DO...WHILE) ***/
// {
//     console.log("\n--- 5. Sequência de asteriscos (Do...While) ---");
//     let linha = 1;
//     do {
//         let textoAsteriscos = "";
//         let ast = 1;
//         do {
//             textoAsteriscos += "*";
//             ast++;
//         } while (ast <= linha); // Loop interno avaliado no final
//         console.log(textoAsteriscos);
//         linha++;
//     } while (linha <= 5); // Loop externo avaliado no final
// }

// /*** EXERCÍCIO 6: Jogo de adivinhação (DO...WHILE) ***/
// {
//     console.log("\n--- 6. Jogo de adivinhação (Do...While) ---");
//     let numeroSecreto = Math.floor(Math.random() * 100) + 1;
//     let palpite;
//     let tentatives = 0;
//     do {
//         // Abre o prompt direto na cara do usuário antes de verificar qualquer condição
//         let entrada = prompt("Do...While - Tente adivinhar o número (1 a 100):");
//         palpite = Number(entrada);
//         tentatives++;
//         if (palpite < numeroSecreto) {
//             alert("Muito baixo!");
//         } else if (palpite > numeroSecreto) {
//             alert("Muito alto!");
//         }
//     } while (palpite !== numeroSecreto); // Se errou, volta para o topo do bloco 'do'
//     console.log(`Acertou no Do...While! Levou ${tentatives} tentativas.`);
// }

// /*** EXERCÍCIO 7: Preenchendo um quadro (DO...WHILE) ***/
// {
//     console.log("\n--- 7. Preenchendo um quadro (Do...While) ---");
//     let largura = Number(prompt("Largura do quadro (Do...While):", "4"));
//     let altura = Number(prompt("Altura do quadro (Do...While):", "3"));
//     let l = 1;
//     do {
//         let linhaQuadro = "";
//         let c = 1;
//         do {
//             linhaQuadro += "#";
//             c++;
//         } while (c <= largura); // Testa as colunas no final
//         console.log(linhaQuadro);
//         l++;
//     } while (l <= altura); // Testa as linhas no final
// }


// /*******************************************************************************
//  * =============================================================================
//  * SEÇÃO 3: TODOS OS EXERCÍCIOS USANDO APENAS 'FOR'
//  * =============================================================================
//  *******************************************************************************/

// console.log("\n=================== INICIANDO SEÇÃO: FOR ===================");

// /*** EXERCÍCIO 1: Aclamação repetida (FOR) ***/
// {
//     console.log("--- 1. Aclamação repetida (For) ---");
//     let palavra = prompt("Digite uma palavra para repetir 10 vezes (For):", "Dica");
//     // Tudo em uma linha: declaração (i=1), condição (i<=10) e o acréscimo (i++)
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i}: ${palavra}`);
//     }
// }

// /*** EXERCÍCIO 2: Somando números pares (FOR) ***/
// {
//     console.log("\n--- 2. Somando números pares (For) ---");
//     let entrada = prompt("Digite um número limite para somar os pares (For):", "10");
//     let numeroLimite = Number(entrada);
//     let somaPares = 0;
//     // O 'for' inicializa o i em 2 e controla o avanço de 1 em 1 até o limite de forma limpa
//     for (let i = 2; i <= numeroLimite; i++) {
//         if (i % 2 === 0) {
//             somaPares += i;
//         }
//     }
//     console.log(`Soma dos pares até ${numeroLimite}: ${somaPares}`);
// }

// /*** EXERCÍCIO 3: Lista de compras (FOR) ***/
// {
//     console.log("\n--- 3. Lista de compras (For) ---");
//     console.log("Criando lista... (Digite 0 para parar)");
//     // Deixamos os espaços de configuração vazios (;;), usando o 'for' como um loop infinito controlado internamente por um 'break'
//     for (;;) { 
//         let item = prompt("For - Digite um item para a lista (ou '0' para parar):");
//         if (item === "0" || item === null) {
//             break; // O comando 'break' sai do for imediatamente
//         }
//         if (item.trim() !== "") {
//             console.log(`Item adicionado: ${item}`);
//         }
//     }
// }

// /*** EXERCÍCIO 4: Números ímpares inversos (FOR) ***/
// {
//     console.log("\n--- 4. Números ímpares inversos (For) ---");
//     let entrada = prompt("Digite um número inicial para contagem regressiva (For):", "7");
//     let numeroInicial = Number(entrada);
//     // Configura o for começando do topo e decrescendo até chegar a 1 usando '--'
//     for (let i = numeroInicial; i >= 1; i--) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// /*** EXERCÍCIO 5: Sequência de asteriscos (FOR) ***/
// {
//     console.log("\n--- 5. Sequência de asteriscos (For) ---");
//     // Controla as linhas verticais (1 até 5)
//     for (let linha = 1; linha <= 5; linha++) {
//         let textoAsteriscos = "";
//         // Controla os asteriscos horizontais dependendo da linha atual
//         for (let ast = 1; ast <= linha; ast++) {
//             textoAsteriscos += "*";
//         }
//         console.log(textoAsteriscos);
//     }
// }

// /*** EXERCÍCIO 6: Jogo de adivinhação (FOR) ***/
// {
//     console.log("\n--- 6. Jogo de adivinhação (For) ---");
//     let numeroSecreto = Math.floor(Math.random() * 100) + 1;
//     // O 'for' aqui serve perfeitamente para monitorar e incrementar as tentativas de forma automática
//     for (let tentativas = 1; ; tentativas++) {
//         let entrada = prompt("For - Tente adivinhar o número (1 a 100):");
//         let palpite = Number(entrada);
//         if (palpite === numeroSecreto) {
//             console.log(`Acertou no For! Levou ${tentativas} tentativas.`);
//             break; // Sai do loop do jogo
//         } else if (palpite < numeroSecreto) {
//             alert("Muito baixo!");
//         } else {
//             alert("Muito alto!");
//         }
//     }
// }

// /*** EXERCÍCIO 7: Preenchendo um quadro (FOR) ***/
// {
//     console.log("\n--- 7. Preenchendo um quadro (For) ---");
//     let largura = Number(prompt("Largura do quadro (For):", "4"));
//     let altura = Number(prompt("Altura do quadro (For):", "3"));
//     // O 'for' externo cria e empilha as linhas (altura)
//     for (let l = 1; l <= altura; l++) {
//         let linhaQuadro = "";
//         // O 'for' interno preenche os caracteres horizontais de cada linha (largura)
//         for (let c = 1; c <= largura; c++) {
//             linhaQuadro += "#";
//         }
//         console.log(linhaQuadro);
//     }
// }



// /*******************************************************************************
//  * EXERCÍCIO 1: Quadrado de cada número de 1 a 10
//  * * O loop 'for' junta a inicialização, a condição e o incremento em uma linha só!
//  *******************************************************************************/
// {
//     console.log("--- 1. Quadrado dos números de 1 a 10 ---"); // Exibe o título no console
//     // Inicia 'i' em 1; roda enquanto 'i' for <= 10; adiciona +1 a 'i' no fim de cada rodada
//     for (let i = 1; i <= 10; i++) { 
//         let quadrado = i * i; // Multiplica o número por ele mesmo para achar o quadrado
//         console.log(`O quadrado de ${i} é: ${quadrado}`); // Mostra o resultado detalhado na tela
//     } // Fim do bloco for
// }

// /*******************************************************************************
//  * EXERCÍCIO 2: Números de 10 a 1 em ordem decrescente
//  * * No 'for' decrescente, começamos no valor alto e usamos o operador '--'.
//  *******************************************************************************/
// {
//     console.log("\n--- 2. Ordem Decrescente (10 a 1) ---"); // Exibe o título no console
//     // Inicia 'i' em 10; roda enquanto 'i' for >= 1; subtrai 1 de 'i' no fim de cada rodada
//     for (let i = 10; i >= 1; i--) { 
//         console.log(i); // Imprime o valor atual de 'i' no console
//     } // Fim do bloco for
// }

// /*******************************************************************************
//  * EXERCÍCIO 3: Soma dos números de 1 a 100
//  * * Acumula os valores sequenciais do 'for' na variável 'soma'.
//  *******************************************************************************/
// {
//     console.log("\n--- 3. Soma de 1 a 100 ---"); // Exibe o título no console
//     let soma = 0; // Cria a variável 'soma' zerada para acumular o total
//     // O loop começa em 1 e vai somando +1 até chegar no 100
//     for (let i = 1; i <= 100; i++) { 
//         soma += i; // Adiciona o valor atual de 'i' na variável 'soma'
//     } // Fim do bloco for
//     console.log("A soma total de 1 a 100 é: " + soma); // Mostra o resultado final acumulado (5050)
// }

// /*******************************************************************************
//  * EXERCÍCIO 4: Tabuada do 5
//  * * O 'for' avança o multiplicador de 1 até 10.
//  *******************************************************************************/
// {
//     console.log("\n--- 4. Tabuada do 5 ---"); // Exibe o título no console
//     let numero = 5; // Define o número base da tabuada (5)
//     // O loop inicia o multiplicador 'i' em 1 e vai até 10, somando +1 a cada volta
//     for (let i = 1; i <= 10; i++) { 
//         let resultado = numero * i; // Multiplica o 5 pelo valor atual de 'i'
//         console.log(`${numero} x ${i} = ${resultado}`); // Mostra a linha da tabuada formatada
//     } // Fim do bloco for
// }

// /*******************************************************************************
//  * EXERCÍCIO 5: Tabuada do número que o usuário pedir
//  * * Pede o número ao usuário e usa o 'for' para gerar a tabuada dele.
//  *******************************************************************************/
// {
//     console.log("\n--- 5. Tabuada Personalizada ---"); // Exibe o título no console
//     let entrada = prompt("Digite qual tabuada você deseja ver (versão FOR):"); // Abre a janela para o usuário digitar
//     let numeroUsr = Number(entrada); // Converte o texto digitado pelo usuário em um número real

//     if (isNaN(numeroUsr)) { // Verifica se o que foi digitado NÃO é um número válido
//         console.log("Opção inválida. Por favor, digite apenas números."); // Avisa o usuário sobre o erro
//     } else { // Se for um número válido, entra no bloco de cálculo da tabuada
//         console.log(`Tabuada do ${numeroUsr}:`); // Exibe o cabeçalho da tabuada escolhida
//         // O loop controla o multiplicador 'i' indo de 1 até 10 automaticamente
//         for (let i = 1; i <= 10; i++) { 
//             let resultado = numeroUsr * i; // Multiplica o número do usuário pelo multiplicador 'i'
//             console.log(`${numeroUsr} x ${i} = ${resultado}`); // Mostra a linha do cálculo na tela
//         } // Fim do bloco for
//     } // Fim da validação if/else
// }

// /*******************************************************************************
//  * EXERCÍCIO 6: Números ímpares de 1 a 20
//  * * Filtra os valores dentro do loop 'for' usando o operador de módulo (resto).
//  *******************************************************************************/
// {
//     console.log("\n--- 6. Números Ímpares de 1 a 20 ---"); // Exibe o título no console
//     // O loop passa por todos os números de 1 a 20, avançando de 1 em 1
//     for (let i = 1; i <= 20; i++) { 
//         if (i % 2 !== 0) { // Testa se o resto da divisão de 'i' por 2 é diferente de zero (regra do ímpar)
//             console.log(i); // Se for ímpar, imprime o número no console
//         } // Fim do teste if
//     } // Fim do bloco for
// }

// /*******************************************************************************
//  * EXERCÍCIO 7: Ordem Crescente e Decrescente (1 a 10) refeito
//  * * Dois loops 'for' independentes para demonstrar as duas direções.
//  *******************************************************************************/
// {
//     console.log("\n--- 7. Crescente e Decrescente de 1 a 10 ---"); // Exibe o título no console
//     console.log("Subindo:");
//     for (let i = 1; i <= 10; i++) { // For subindo de 1 até 10
//         console.log(i); //







// /*******************************************************************************
//  * EXERCÍCIO 1: Quadrado de cada número de 1 a 10
//  * * O quadrado de um número é ele multiplicado por ele mesmo (ex: 3 * 3 = 9).
//  *******************************************************************************/
// {
//     console.log("--- 1. Quadrado dos números de 1 a 10 ---"); // Exibe o título no console
//     let i = 1; // Cria o contador 'i' começando no número 1
//     do { // Inicia o bloco de repetição 'do'
//         let quadrado = i * i; // Multiplica o número por ele mesmo para achar o quadrado
//         console.log(`O quadrado de ${i} é: ${quadrado}`); // Mostra o resultado detalhado na tela
//         i++; // Soma 1 ao contador 'i' para ir para o próximo número
//     } while (i <= 10); // Repete o bloco enquanto 'i' for menor ou igual a 10
// }

// /*******************************************************************************
//  * EXERCÍCIO 2: Números de 10 a 1 em ordem decrescente
//  * * Começamos no 10 e vamos subtraindo de 1 em 1 até chegar no 1.
//  *******************************************************************************/
// {
//     console.log("\n--- 2. Ordem Decrescente (10 a 1) ---"); // Exibe o título no console
//     let i = 10; // Cria o contador 'i' começando no número 10
//     do { // Inicia o bloco de repetição 'do'
//         console.log(i); // Imprime o valor atual de 'i' no console
//         i--; // Subtrai 1 do contador 'i' para descer um número (ex: de 10 vai para 9)
//     } while (i >= 1); // Repete o bloco enquanto 'i' for maior ou igual a 1
// }

// /*******************************************************************************
//  * EXERCÍCIO 3: Soma dos números de 1 a 100
//  * * Acumula todos os números em uma variável totalizadora.
//  *******************************************************************************/
// {
//     console.log("\n--- 3. Soma de 1 a 100 ---"); // Exibe o título no console
//     let soma = 0; // Cria a variável 'soma' zerada para acumular o total
//     let i = 1; // Cria o contador 'i' começando no número 1
//     do { // Inicia o bloco de repetição 'do'
//         soma += i; // Adiciona o valor atual de 'i' na variável 'soma'
//         i++; // Soma 1 ao contador 'i' para passar para o próximo número
//     } while (i <= 100); // Repete o bloco enquanto 'i' for menor ou igual a 100
//     console.log("A soma total de 1 a 100 é: " + soma); // Mostra o resultado final acumulado (5050)
// }

// /*******************************************************************************
//  * EXERCÍCIO 4: Tabuada do 5
//  * * Multiplica o número 5 fixo pelos valores de 1 até 10.
//  *******************************************************************************/
// {
//     console.log("\n--- 4. Tabuada do 5 ---"); // Exibe o título no console
//     let numero = 5; // Define o número base da tabuada (5)
//     let i = 1; // Cria o multiplicador 'i' começando no 1
//     do { // Inicia o bloco de repetição 'do'
//         let resultado = numero * i; // Multiplica o 5 pelo valor atual de 'i'
//         console.log(`${numero} x ${i} = ${resultado}`); // Mostra a linha da tabuada formatada
//         i++; // Soma 1 ao multiplicador 'i' para avançar (ex: de 5x1 vai para 5x2)
//     } while (i <= 10); // Repete o bloco enquanto o multiplicador 'i' for menor ou igual a 10
// }

// /*******************************************************************************
//  * EXERCÍCIO 5: Tabuada do número que o usuário pedir
//  * * Captura a escolha do usuário e valida se é um número antes de calcular.
//  *******************************************************************************/
// {
//     console.log("\n--- 5. Tabuada Personalizada ---"); // Exibe o título no console
//     let entrada = prompt("Digite qual tabuada você deseja ver:"); // Abre a janela para o usuário digitar
//     let numeroUsr = Number(entrada); // Converte o texto digitado pelo usuário em um número real

//     if (isNaN(numeroUsr)) { // Verifica se o que foi digitado NÃO é um número válido
//         console.log("Opção inválida. Por favor, digite apenas números."); // Avisa o usuário sobre o erro
//     } else { // Se for um número válido, entra no bloco de cálculo da tabuada
//         let i = 1; // Cria o multiplicador 'i' começando no 1
//         console.log(`Tabuada do ${numeroUsr}:`); // Exibe o cabeçalho da tabuada escolhida
//         do { // Inicia o bloco de repetição 'do'
//             let resultado = numeroUsr * i; // Multiplica o número do usuário pelo multiplicador 'i'
//             console.log(`${numeroUsr} x ${i} = ${resultado}`); // Mostra a linha do cálculo na tela
//             i++; // Soma 1 ao multiplicador 'i' para ir para a próxima linha da tabuada
//         } while (i <= 10); // Repete o bloco enquanto o multiplicador 'i' for menor ou igual a 10
//     } // Fim da validação if/else
// }

// /*******************************************************************************
//  * EXERCÍCIO 6: Números ímpares de 1 a 20
//  * * Testa o resto da divisão por 2 de cada número para saber se ele é ímpar.
//  *******************************************************************************/
// {
//     console.log("\n--- 6. Números Ímpares de 1 a 20 ---"); // Exibe o título no console
//     let i = 1; // Cria o contador 'i' começando no número 1
//     do { // Inicia o bloco de repetição 'do'
//         if (i % 2 !== 0) { // Testa se o resto da divisão de 'i' por 2 é diferente de zero (regra do ímpar)
//             console.log(i); // Se for ímpar, imprime o número no console
//         } // Fim do teste de condição do if
//         i++; // Soma 1 ao contador 'i' para testar o próximo número da sequência
//     } while (i <= 20); // Repete todo o processo enquanto 'i' for menor ou igual a 20
// }








// /*******************************************************************************
//  * EXERCÍCIO 1: Ordem Crescente e Decrescente (1 a 10)
//  *******************************************************************************/
// {
//     console.log("--- 1. Ordem Crescente (1 a 10) ---"); // Exibe o título no console
//     let crescente = 1; // Cria a variável iniciando em 1
//     do { // Inicia o bloco de repetição 'do'
//         console.log(crescente); // Imprime o valor atual de 'crescente'
//         crescente++; // Soma 1 ao valor atual de 'crescente'
//     } while (crescente <= 10); // Repete o bloco SE 'crescente' for menor ou igual a 10

//     console.log("--- 1. Ordem Decrescente (10 a 1) ---"); // Exibe o título no console
//     let decrescente = 10; // Cria a variável iniciando em 10
//     do { // Inicia o bloco de repetição 'do'
//         console.log(decrescente); // Imprime o valor atual de 'decrescente'
//         decrescente--; // Subtrai 1 do valor atual de 'decrescente'
//     } while (decrescente >= 1); // Repete o bloco SE 'decrescente' for maior ou igual a 1
// }

// /*******************************************************************************
//  * EXERCÍCIO 2: Fatorial de um Número (Ex: 5!)
//  *******************************************************************************/
// {
//     console.log("\n--- 2. Fatorial ---"); // Exibe o título no console
//     let numero = 5; // Define o número que queremos descobrir o fatorial
//     let resultado = 1; // Cria a variável para acumular as multiplicações, começando em 1
//     let i = numero; // Cria o contador 'i' copiando o valor do número (5)

//     do { // Inicia o bloco de repetição 'do'
//         resultado *= i; // Multiplica o 'resultado' atual pelo valor de 'i' e guarda nele mesmo
//         i--; // Diminui o contador 'i' em 1 para pegar o próximo antecessor
//     } while (i > 1); // Repete o processo enquanto 'i' for maior que 1

//     console.log(`O fatorial de ${numero} é: ${resultado}`); // Mostra o resultado final formatado
// }

// /*******************************************************************************
//  * EXERCÍCIO 3: O Desafio "FizzBuzz" (1 a 100)
//  *******************************************************************************/
// {
//     console.log("\n--- 3. FizzBuzz (1 a 100) ---"); // Exibe o título no console
//     let i = 1; // Cria o contador 'i' começando do número 1

//     do { // Inicia o bloco de repetição 'do'
//         if (i % 3 === 0 && i % 5 === 0) { // Se o resto da divisão de 'i' por 3 E por 5 for zero
//             console.log("FizzBuzz"); // Imprime "FizzBuzz" no console
//         } else if (i % 3 === 0) { // Se não, mas o resto da divisão por 3 for zero
//             console.log("Fizz"); // Imprime "Fizz" no console
//         } else if (i % 5 === 0) { // Se não, mas o resto da divisão por 5 for zero
//             console.log("Buzz"); // Imprime "Buzz" no console
//         } else { // Se não entrar em nenhuma das condições acima
//             console.log(i); // Imprime o próprio número 'i'
//         } // Fim da estrutura de condições (if/else)
//         i++; // Soma 1 ao contador 'i' para passar para o próximo número
//     } while (i <= 100); // Repete todo o processo enquanto 'i' for menor ou igual a 100
// }

// /*******************************************************************************
//  * EXERCÍCIO 4: Cálculo da Série (1 + 1/2 + 1/3 + ... + 1/10)
//  *******************************************************************************/
// {
//     console.log("\n--- 4. Cálculo da Série ---"); // Exibe o título no console
//     let soma = 0; // Cria a variável 'soma' zerada para acumular o total
//     let divisor = 1; // Cria o 'divisor' (denominador da fração) começando em 1

//     do { // Inicia o bloco de repetição 'do'
//         soma += 1 / divisor; // Divide 1 pelo divisor atual, e soma o resultado na variável 'soma'
//         divisor++; // Soma 1 ao 'divisor' para que a próxima fração seja menor (ex: 1/2, 1/3...)
//     } while (divisor <= 10); // Repete o bloco enquanto o 'divisor' for menor ou igual a 10

//     console.log("O resultado da série é: " + soma); // Imprime o valor final acumulado na soma
// }

// /*******************************************************************************
//  * EXERCÍCIO 5: Contar Pares e Ímpares até um Limite do Usuário
//  *******************************************************************************/
// {
//     console.log("\n--- 5. Contar Pares e Ímpares ---"); // Exibe o título no console
//     let entrada = prompt("Digite um número limite para contar pares e ímpares:", "20"); // Abre janela para o usuário digitar
//     let limite = Number(entrada) || 20; // Converte o texto digitado para número (ou usa 20 se o usuário cancelar)
//     let i = 1; // Cria o contador 'i' começando no número 1
//     let pares = 0; // Cria o contador de números pares começando em 0
//     let impares = 0; // Cria o contador de números ímpares começando em 0

//     do { // Inicia o bloco de repetição 'do'
//         if (i % 2 === 0) { // Testa se o resto da divisão de 'i' por 2 é igual a zero (regra do par)
//             pares++; // Se for par, adiciona +1 ao contador de pares
//         } else { // Se o resto não for zero (regra do ímpar)
//             impares++; // Adiciona +1 ao contador de ímpares
//         } // Fim do teste if/else
//         i++; // Soma +1 ao contador 'i' para testar o próximo número da sequência
//     } while (i <= limite); // Repete o bloco enquanto o número atual 'i' não passar do 'limite'

//     console.log(`De 1 até ${limite} existem:`); // Exibe texto explicativo com o limite escolhido
//     console.log(`Pares: ${pares}`); // Exibe o total acumulado de números pares
//     console.log(`Ímpares: ${impares}`); // Exibe o total acumulado de números ímpares
// }

// /*******************************************************************************
//  * EXERCÍCIO 6: Encontrar o Maior e o Menor Valor de uma Lista
//  *******************************************************************************/
// {
//     console.log("\n--- 6. Maior e Menor de uma Lista ---"); // Exibe o título no console
//     let numeros = [23, 5, 87, 2, 44, 12]; // Cria um Array (lista) com vários números misturados
//     let maior = numeros[0]; // Guarda o primeiro número da lista (23) fingindo que ele é o maior por enquanto
//     let menor = numeros[0]; // Guarda o primeiro número da lista (23) fingindo que ele é o menor por enquanto
//     let indice = 0; // Cria a variável 'indice' em 0 para controlar a posição da lista que vamos ler

//     do { // Inicia o bloco de repetição 'do'
//         let numAtual = numeros[indice]; // Pega o número que está na posição 'indice' atual da lista
//         if (numAtual > maior) maior = numAtual; // Se o número atual for maior do que o que temos guardado, atualiza o 'maior'
//         if (numAtual < menor) menor = numAtual; // Se o número atual for menor do que o que temos guardado, atualiza o 'menor'
//         indice++; // Soma 1 ao 'indice' para podermos ler a próxima posição da lista na próxima rodada
//     } while (indice < numeros.length); // Repete enquanto o 'indice' for menor que a quantidade de itens na lista

//     console.log(`Lista analisada: [${numeros}]`); // Mostra a lista original para conferência
//     console.log("Maior valor: " + maior); // Imprime o maior número encontrado
//     console.log("Menor valor: " + menor); // Imprime o menor número encontrado
// }

// /*******************************************************************************
//  * EXERCÍCIO 7: Média de uma Lista de Números
//  *******************************************************************************/
// {
//     console.log("\n--- 7. Média de uma Lista ---"); // Exibe o título no console
//     let notas = [7.5, 8.0, 6.0, 9.5]; // Cria uma lista (array) contendo as notas
//     let soma = 0; // Cria a variável 'soma' começando em zero para juntar os valores
//     let i = 0; // Cria o índice 'i' em zero para percorrer a lista desde o primeiro item

//     do { // Inicia o bloco de repetição 'do'
//         soma += notas[i]; // Pega a nota da posição 'i' e adiciona ao acumulador 'soma'
//         i++; // Soma 1 ao índice 'i' para apontar para a próxima nota da lista
//     } while (i < notas.length); // Repete o processo enquanto o índice for menor que o tamanho da lista

//     let media = soma / notas.length; // Divide o total da soma pela quantidade de notas na lista para achar a média
//     console.log(`Notas: [${notas}]`); // Mostra as notas usadas no cálculo
//     console.log("A média das notas é: " + media); // Exibe o resultado da média final
// }

// /*******************************************************************************
//  * EXERCÍCIO 8: Verificador de Número Primo
//  *******************************************************************************/
// {
//     console.log("\n--- 8. Verificador de Número Primo ---"); // Exibe o título no console
//     let numero = 17; // Define o número que queremos testar se é primo
//     let ehPrimo = true; // Cria uma variável booleana assumindo que o número É primo por padrão

//     if (numero <= 1) { // Verifica se o número é menor ou igual a 1 (pois estes nunca são primos)
//         ehPrimo = false; // Define que não é primo caso entre nessa condição
//     } else { // Se o número for maior que 1, entra no teste real
//         let divisor = 2; // Começa testando a divisão pelo número 2
//         do { // Inicia o bloco de repetição 'do' interno
//             if (numero !== divisor && numero % divisor === 0) { // Se o divisor for diferente do próprio número E o resto for zero
//                 ehPrimo = false; // Descobrimos que ele é divisível por outro número, logo NÃO é primo
//                 break; // Interrompe o laço 'do...while' imediatamente, não precisa continuar testando
//             } // Fim do teste if
//             divisor++; // Aumenta o divisor em 1 para testar o próximo número na próxima rodada
//         } while (divisor < numero); // Repete o teste enquanto o divisor for menor que o número analisado
//     } // Fim do bloco else

//     console.log(`${numero} ${ehPrimo ? "É PRIMO" : "NÃO É PRIMO"}`); // Exibe o número e o resultado usando um if simplificado (ternário)
// }

// /*******************************************************************************
//  * EXERCÍCIO 9: Números Primos de 1 a 50
//  *******************************************************************************/
// {
//     console.log("\n--- 9. Números Primos de 1 a 50 ---"); // Exibe o título no console
//     let candidato = 2; // Começa o 'candidato' a primo no número 2 (já que 1 não conta)
//     let resultadoPrimos = []; // Cria um array vazio para ir guardando os primos que encontrarmos

//     do { // Inicia o laço PRINCIPAL (passa de número em número de 2 até 50)
//         let ehPrimo = true; // Reseta a certeza de primo para 'verdadeiro' a cada novo candidato
//         let divisor = 2; // Reinicia o teste de divisores sempre começando do 2

//         do { // Inicia o laço INTERNO (testa se o candidato atual tem divisores)
//             if (candidato !== divisor && candidato % divisor === 0) { // Se achar divisão perfeita por outro número
//                 ehPrimo = false; // Descobre que o candidato não é primo
//                 break; // Para o laço de testes internos imediatamente para economizar processamento
//             } // Fim do if
//             divisor++; // Passa para o próximo divisor possível
//         } while (divisor < candidato); // Continua testando divisores enquanto forem menores que o candidato

//         if (ehPrimo) { // Se após todos os testes a variável 'ehPrimo' continuar verdadeira
//             resultadoPrimos.push(candidato); // Coloca o número aprovado dentro do nosso array de resultados
//         } // Fim do if

//         candidato++; // Soma 1 ao candidato para analisar o próximo número na próxima rodada do laço principal
//     } while (candidato <= 50); // O laço principal continua rodando até testar o número 50

//     console.log("Primos encontrados: " + resultadoPrimos.join(", ")); // Transforma a lista de primos em texto separado por vírgulas e mostra
// }








// //  ☣️☣️☣️ Números Primos de 1 a 50

// // console.log("Números primos de 1 a 50:");

// // let candidato = 2; // Começamos do 2, pois 1 não é primo

// // while (candidato <= 50) {
// //     let ehPrimo = true;
// //     let divisor = 2;

// //     // Testa se o 'candidato' atual tem algum divisor além de 1 e ele mesmo
// //     while (divisor < candidato) {
// //         if (candidato % divisor === 0) {
// //             ehPrimo = false; // Achou um divisor, quebra o laço interno
// //             break; 
// //         }
// //         divisor++;
// //     }

// //     // Se saiu do laço interno e a variável continuou verdadeira, ele é primo!
// //     if (ehPrimo) {
// //         console.log(candidato);
// //     }

// //     candidato++; // Vai para o próximo número da lista
// // }



// // ☣️ Verificador de Número Primo
// // let numero = 17; // Escolha o número para testar
// // let ehPrimo = true; // Começamos achando que ele É primo

// // if (numero <= 1) {
// //     ehPrimo = false; // Números menores ou iguais a 1 não são primos
// // } else {
// //     let divisor = 2;
// //     // Vamos testar divisores desde o 2 até a metade do número (otimização lógica)
// //     while (divisor < numero) {
// //         if (numero % divisor === 0) {
// //             ehPrimo = false; // Se dividiu perfeitamente por alguém, não é primo!
// //             break; // Para o loop na hora, não precisa continuar testando
// //         }
// //         divisor++;
// //     }
// // }

// // if (ehPrimo) {
// //     console.log(numero + " é um número primo! ☣️");
// // } else {
// //     console.log(numero + " NÃO é um número primo.");
// // }




// // Média de uma Lista de Números
// // let notas = [7.5, 8.0, 6.0, 9.5];
// // let soma = 0;

// // for (let nota of notas) {
// //     soma += nota; // Soma todas as notas
// // }

// // let media = soma / notas.length; // Divide pelo tamanho da lista
// // console.log("A média é: " + media);




// // Encontrar o Maior e o Menor Valor de uma Lista
// // let numeros = [23, 5, 87, 2, 44, 12];

// // // Começamos assumindo que o primeiro elemento (índice 0) é o maior e o menor
// // let maior = numeros[0];
// // let menor = numeros[0];

// // for (let num of numeros) {
// //     if (num > maior) {
// //         maior = num; // Se achou um número maior do que guardávamos, atualiza
// //     }
// //     if (num < menor) {
// //         menor = num; // Se achou um número menor do que guardávamos, atualiza
// //     }
// // }

// // console.log("Maior valor: " + maior);
// // console.log("Menor valor: " + menor);

// // Contar Pares e Ímpares até um Limite do Usuário

// // let limite = Number(prompt("Digite até qual número quer contar:"));
// // let i = 1;
// // let pares = 0;
// // let impares = 0;

// // while (i <= limite) {
// //     if (i % 2 === 0) {
// //         pares++; // Se o resto da divisão por 2 for 0, é par. Soma +1 no contador de pares.
// //     } else {
// //         impares++; // Caso contrário, é ímpar. Soma +1 no contador de ímpares.
// //     }
// //     i++;
// // }

// // console.log("Total de números pares: " + pares);
// // console.log("Total de números ímpares: " + impares);

// // Cálculo da Série ($1 + 1/2 + 1/3 + ... + 1/10$)

// // let soma = 0;
// // let divisor = 1;

// // while (divisor <= 10) {
// //     soma += 1 / divisor; // Adiciona a fração atual (ex: 1/1, depois 1/2, 1/3...)
// //     divisor++;
// // }

// // console.log("O resultado da série é: " + soma);

// // O Desafio "FizzBuzz" (1 a 100)

// // let i = 1;

// // while (i <= 100) {
// //     // 1º passo: Verifica se é múltiplo de 3 E 5 ao mesmo tempo (ex: 15, 30...)
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } 
// //     // 2º passo: Se não for dos dois, verifica se é apenas de 3
// //     else if (i % 3 === 0) {
// //         console.log("Fizz");
// //     } 
// //     // 3º passo: Se não for nenhum dos anteriores, verifica se é de 5
// //     else if (i % 5 === 0) {
// //         console.log("Buzz");
// //     } 
// //     // 4º passo: Se não for múltiplo de nenhum, imprime o próprio número
// //     else {
// //         console.log(i);
// //     }
// //     i++;
// // }


// // // Fatorial de um Número
// // let numero = 5; // Número que queremos calcular
// // let resultado = 1; // Começa em 1 porque 0 anularia a multiplicação
// // let i = numero;

// // while (i > 1) {
// //     resultado *= i; // Multiplica o resultado atual pelo valor de i
// //     i--; // Desce para o próximo número
// // }

// // console.log("O fatorial de " + numero + " é: " + resultado);


// // // Ordem Crescente e Decrescente (1 a 10)
// // console.log("--- Ordem Crescente ---");
// // let crescente = 1;
// // while (crescente <= 10) {
// //     console.log(crescente);
// //     crescente++; // Soma 1 a cada rodada
// // }

// // console.log("--- Ordem Decrescente ---");
// // let decrescente = 10;
// // while (decrescente >= 1) {
// //     console.log(decrescente);
// //     decrescente--; // Subtrai 1 a cada rodada
// // }



// // // 🐱‍🏍Mostre os números ímpares de 1 a 20.
// // let i = 1; // 1. Começamos o nosso contador no número 1

// // console.log("Números ímpares de 1 a 20:");

// // // 2. O laço vai repetir enquanto o 'i' for menor ou igual a 20
// // while (i <= 20) {
    
// //     // 3. Aqui acontece o teste: dividimos 'i' por 2. O resto é diferente de zero?
// //     if (i % 2 !== 0) {
// //         // 4. Se for diferente de zero, significa que o número é ÍMPAR.
// //         // Então, mostramos ele no console.
// //         console.log(i);
// //     }

// //     // 5. Somamos +1 ao contador para avançar para o próximo número (2, depois 3, depois 4...)
// //     i++;
// // }




// // // Altere o programa anterior para fornecer a tabuada do número que o usuário pedir
// // // Pede o número ao usuário
// // let entrada = prompt("Digite o número que você quer ver a tabuada:");
// // let numero = Number(entrada);

// // // Valida se o usuário realmente digitou um número válido
// // if (isNaN(numero)) {
// //     console.log("Por favor, digite um número válido.");
// // } else {
// //     let i = 1;
// //     console.log("Tabuada do " + numero + ":");

// //     while (i <= 10) {
// //         let resultado = numero * i;
// //         console.log(numero + " x " + i + " = " + resultado);
// //         i++;
// //     }
// // }














// // //Criar um programa que conte de 1 até 10.
// // // let i = 0;
// // // while (i < 10) {//console.log(i);
// // //     i++;}
// // // document.getElementById("resultado").innerText += i; +i++

// // //quadrado de 1 a 10



// // // let i = 10; // Começa no 10

// // // while (i >= 1) { // Continua enquanto i for maior ou igual a 1
// // //     console.log("⏱️ Valor atual de i: " + i);
// // //     i--
// // // }


// // //🐱‍🏍Calcule a soma dos números de 1 a 100.



// // // let soma = 0
// // // let i = 1
// // // while(i <= 100){
// // //      soma += i 
// // //      i++
    
// // // }
// // //  console.log("a soma é = " + soma)


// // //  let soma = 0
// // // let i = 1
// // // while(i <= 100){
// // //      soma += i 
// // //      i++
   
// // // }
// // // document.getElementById("resultado").innerText += "Soma: " + soma

// // // Imprima a tabuada do 5.
// // // let multiplicador = 5;
// // // let i = 1
// // // while(i <= 10){  
// // //     document.getElementById("resultado").innerText += "\n"  +multiplicador + " x " + i + " = " + (multiplicador * i) + "\n";
// // //     i++
   
// // // }

// // // let senha = "1234";
// // // let tentativa;

// // // do {
// // //   tentativa = prompt("Digite a senha:");
// // // } while (tentativa !== senha);

// // // alert("Acesso liberado!");

