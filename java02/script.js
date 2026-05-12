let resposta  = document.getElementById ('resultado')
 function fabricaDeFantasias(){
// infos
let salario, valorEmprestimo, numeroPrestacoes,valorPrestacao ,limitePrestacao

//  entradas
salario= Number(prompt("Qual o valor do salario:"))
valorEmprestimo=Number(prompt("Qual valor do emprestimo: "))
 numeroPrestacoes=Number(prompt("Qual numero de prestacoes: "))

// processamentos 
valorPrestacao = valorEmprestimo/numeroPrestacoes
limitePrestacao = salario * 0.3

if(valorPrestacao <= limitePrestacao){
resposta.innerHTML = 'Emprestimo concedido'

}else{
    resposta.innerHTML = 'Emprestimo nao concedido '
}
// saidas

 }


























 function calcularUber(){
// infos
let distancia,tempoSegundos, tempoHoras ,tempoMinutos ,tempoDias
const velocidade = 300000

// entrada
distancia = Number(prompt("distancia: "))

// processamento
tempoSegundos = distancia / velocidade

//  saida
resposta.innerHTML = '<br> Tempo: ' + tempoSegundos + 'segundos '

// segunda etapa
if (tempoSegundos > 60){
tempoMinutos = tempoSegundos / 60 
resposta.innerHTML += '<br>ou' +tempoMinutos +'minutos (s)'
tempoHoras = tempoMinutos /60
resposta.innerHTML +='<br>ou' + tempoHoras + 'horas'

}
if(tempoHoras > 24){
tempoDias = tempoHoras / 24
// ...
}


}







 













function verificarIdade(){
//   infos
let idade
// leitura
idade = Number(prompt("Digite a sua idade: "))
// processamento
if (idade >= 18) {
        resposta.innerHTML = "Maior de idade"
    } else {
        resposta.innerHTML = "Menor de idade"
    }

if(idade>=16){
    resposta.innerHTML += "voto opcional"
}else if(idade>=18){

} else{
    resposta.innerHTML += "voto  obrigatorio"
}
     
}












// let resposta  = document.getElementById ('resultado')

function ex09(){
    // if(){

    // }else{

    // }
}


function verificarMeta(){
    // infos
    let totalBruto,premiacoes,presentes,comicoes
    let meta
// entradas
totalBruto = Number(prompt("totalBruto: "))
premiacoes = Number(prompt("premiacoes: "))
presentes = Number(prompt("presentes"))
comicoes =Number(prompt("comocoes"))
meta = Number(prompt("Meta de hoje:"))
//processamento
lucro = totalBruto - premiacoes - presentes - comicoes
let mensagem


if(lucro >= meta){
// bateu a meta
}else{
    // nao bateu a meta
}
if (lucro = 0){
    // sem meta mais com lucro
    mensagem = 'Nao batemos a meta mais tivemos lucro de R$'  
    +lucro.tofixed(2).replace('.',',')

}else{
    // sem meta e prejuiso
    let prejuiso =lucro * -1
}


// saidas
resposta.innerHTML= "lucro de hoje: R$" + lucro.toFixed(2).replace('.'  , ',' ) +'<br>' 
+ mensagem

}

















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
}else if (operacao == '-'){
    resultado = num1 - num2

}else if (operacao == '*'){
    resultado = num1 * num2
}else if (operacao == '/'){
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
