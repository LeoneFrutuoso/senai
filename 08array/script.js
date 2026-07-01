let produtos =  ["meia", "pa de corte", "suco de manga", "leite"]
let precos = [665,9999,777,12];

function aumentarPreco() {
for (let i = 0; i < precos.length; i++) {
    precos[i] = precos[i] * 4;
}
}

function adicionarProduto() {
let preco , produto;
do{
    produto = prompt("Digite o nome do produto");

}while (produto=='');


do{
    preco = Number(prompt("Digite o preço do produto"));

} while(preco <= 0 )

    
produtos.push(produto);
precos.push(preco);
verProdutosComPrecos();


}




function verProdutos() {
//console.log(produtos)
for (let i = 0; i < produtos.length; i++) {
    document.getElementById('listaProdutos').innerHTML += '<p>'+ i + " °: " + produtos[i] + '</p>';
}
}

function verProdutosComPrecos() {
    
    for (let i = 0; i < produtos.length; i++) {
        document.getElementById('listaProdutos').innerHTML += 
        '<p>'+ i + " °: " + produtos[i] + " - R$ " + precos[i].toFixed(2).replace('.', ',')+ '</p>';
    }
}

function removerUltimoProduto() {
produtos.pop(); 
precos.pop();
verProdutosComPrecos();



}





