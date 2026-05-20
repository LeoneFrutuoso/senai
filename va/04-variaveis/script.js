
//  total de vendas: r$ = 0
let total = 0
let totalPontos = 0;


function rolarDado(lados) {
   


    // [PROCESSAMENTO]
   
    let resultadoRolagem = Math.floor(Math.random() * lados) + 1;

    // Somando o resultado do dado atual no nosso totalizador Global
    totalPontos = totalPontos + resultadoRolagem;


    // [SAÍDAS]
  
    document.getElementById('p-resultadoDado').innerHTML = "Você rolou um D" + lados + " e tirou: " + resultadoRolagem;
    document.getElementById('p-totalPontos').innerHTML = "Total Acumulado: " + totalPontos + " pontos";
}


// Função extra para caso a Dona Bete queira começar o teste do zero
function zerarJogo() {
    totalPontos = 0;
    document.getElementById('p-resultadoDado').innerHTML = "Jogo zerado!";
    document.getElementById('p-totalPontos').innerHTML = "Total Acumulado: 0 pontos";
}
































function registrarVenda(){
let valor = Number(document.getElementById('inputVenda').value)
// registrar venda no total
total = total + valor 
// atualizar total na pagina 
document.getElementById('totalVendido').innerHTML =  
'Total de vendas: R$' + total.toFixed(2)
//  lista de vendas 
document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) +'<br>'
document.getElementById('inputVenda').value = ''
document.getElementById('inputVenda').focus()

console.log(valor)
}

let cont = 0

function incrementarContagem(){
cont = cont + 1
    // cont = cont + 1
    // cont += 1
    cont++
    document.getElementById('p-contagem').innerHTML = cont

}


function decrementarContagem(){
   cont--
    document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    // cont += 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    // cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}
function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont


}

let global ='eu sou uma variavel global :/'
function funcao1(){
    let local ='sou uma variavel :D'
    console.log(local)
    console.log(global)
}
 function funcao2(){
    console.log(global);
    // console.log(local)
 }

//  funcao1()
//  funcao2()














