let resposta = document.getElementById ('resultado')

function resultadoDaOperacao(){
    // infos
let num1 ,num2 , operacao ,resultado

    // leitura
 num1 = Number(prompt("digite o primeiro numero: "))
operacao = prompt("digite +, -, *, /")
num2 = Number(prompt("digita o segundo numero: "))
    // processamento
if  (operacao == "+"){
resultado = num1 + num2
}else if{
operacao = num1 - num2

}else if{
 resultado = num1 * num2
}else if{
resultado = num1 / num2
}

    // saidas
     document.getElementById('resultado').innerHTML = resultado

}












function calcularParImpa(){
let n = Number(prompt("digita numero, meu consagrado"))
if (n%2 == 0) {
alert("par")
}else{
alert("impar")

}
}




 



function mostrarDiaDaSemana(){
// leitura
let numero ,dia
// leitura 
numero = Number(prompt("digita o numero: "))
 // processamento
if (numero == 1){
    dia = "domingo"
}else if (numero == 2) {
    dia = "segunda "
}else if (numero == 3){
  dia = "terca"
}else if (numero == 4){
    dia = "quarta"
}else if (numero == 5){
    dia = "quinta"
}else if (numero == 6){
    dia = "sexta"
}else if (numero == 7){
    dia = "sabado" 
}else {

}

// saidas
document.getElementById('resultado').innerHTML = dia

}






function adivinharNumero(){
 //let numero = math.round (math.round()*10)// 0..10
//let numero = math.floor(math.round()*10) //0..9
//let numero = Math.ceil(Math.random()*3) //1...10
let numero = Math.random()
 console.log(numero);
numero = numero *10
console.log(numero)
numero = Math.ceil(numero)
console.log(numero)



let chute =Number(prompt("chuta ai: "))
if (chute == numero){
    resposta.innerHTML = "acertou"
}else{ 
        resposta.innerHTML = "errou"
    }

}

function verificarIdade(){
    // infos
    let idade
    // entradas
    idade = Number(prompt("digite sua idade"))
    // processamentos
    // saidas
    if (idade >= 18){
        resposta.innerHTML = "voce é maior de idade"
    }else{
        resposta.innerHTML= "voce nao é maior de idade"
    }
}
