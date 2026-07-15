
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




let dinos = []
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

    document.getElementById("input-nome").focus()
}








function testar(){ 

dinos = [
 
  {
    id: 1718312400001,
    nome: "Tiranossauro Rex",
    altura: 4.0,
    cor: "#FF5733", // Vermelho Alaranjado
    custo: 50000
  },
  {
    id: 1718312400002,
    nome: "Tricerátops",
    altura: 3.0,
    cor: "#33FF57", // Verde
    custo: 35000
  },
  {
    id: 1718312400003,
    nome: "Velociraptor",
    altura: 1.5,
    cor: "#3357FF", // Azul
    custo: 15000
  },
  {
    id: 1718312400004,
    nome: "Braquiossauro",
    altura: 12.0,
    cor: "#F3FF33", // Amarelo
    custo: 90000
  },
  {
    id: 1718312400005,
    nome: "Pterodáctilo",
    altura: 1.2,
    cor: "#FF33F3", // Rosa
    custo: 25000
  }
];



console.log(dinos)
}
