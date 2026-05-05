let resposta = document.getElementById ('resultado')

// function adivinharNumero(){
 //let numero = math.round (math.round()*10)// 0..10
//let numero = math.floor(math.round()*10) //0..9
//let numero = math.ceil(math.round()*3) //1...10
//let numero = matchMedia.round()
 //console.log(numero);
//numero = numero *10
//console.log(numero)
//numero = math.ceil(numero)
//console.log(numero)


let chut =Number(prompt("chuta ai: "))
if (chute == numero){
    resposta.innerHTML = "acertou"
    }else{
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
