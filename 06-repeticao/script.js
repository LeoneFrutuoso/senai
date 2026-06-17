
// let contador = 0 // inicializacao
// while(contador < 10){ // (cond repet)
//     alert("Contador: " + contador)
    
//     contador++ // contagem
// }// voltar e testar novamente


// let peso

// let contador = 0
// while(contador < 10){
//     peso = Number(prompt("Digite o peso:"))
//     if(peso>1.1 || peso<0.9){
//         alert("Fora tolerância do peso")
//     }
//     contador++
// }


// let i = 0 // inicialização
// while(i < 3){ // cond repet
    
//     i++ // contagem
// }

let total = 0

let i = 0 // inicialização
while(i < 3){ // cond repet
    console.log("valor atual de i: " + i)
    i++ // contagem
    console.log(" agora o valor atual de i è: " + i)
    let preco = Number(prompt("Digite o preço do " + i + "° produto:" ))
    total = total + preco
    // total += preco

    document.getElementById('total').innerHTML += i + "° produto: R$" + preco.toFixed(2) + "<br>"
}

alert(total)


