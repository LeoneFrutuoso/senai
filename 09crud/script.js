
// c >> create >>Cadastra 
// R >> read >> Ler
// U >> update >> Atualizar/Atualizar/editar
// D >> Delete >> Deletar/apagar






// let dino ={
// nome : "terranossauro",
// autura : 3,
// cor : 'marrom',
// custo : 14,

// }
// console.log(dino)




const dinos = []
function cadastrarDino(){
const novoDino = {
    id: Date.now(), // Gera um ID único com base no timestamp
    nome: document.getElementById("input-nome").value,
    altura:Number( document.getElementById("input-altura").value),
   cor : document.getElementById("input-cor").value, //valeu pega oq ue esta dentro do input ou seja o que o usuario digitou
    custo : Number(document.getElementById("input-custo").value)

}

dinos.push(novoDino)
console.log(dinos)
 
  limparFormulario()

}

function limparFormulario(){
    document.getElementById("input-nome").value = ""
    document.getElementById("input-altura").value = ""
    document.getElementById("input-cor").value = ""
    document.getElementById("input-custo").value = ""

}








function testar(){ 

const novoDino ={
    nome:prompt("Digite o nome do dinossauro:"),
autura : 3,
cor : 'marrom',
custo : 14,

}
dinos.push(novoDino)
 console.log(dinos)

}
