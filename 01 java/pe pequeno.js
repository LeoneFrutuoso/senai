// infos
let preco, quantidade
// leitura
quantidade = Number(prompt("quantidade: "))
preco = Number(prompt("preço: R$"))
// proc
valorTotal = quantidade * preco
// saidas 
console.log("valor a receber: R$" + valorTotal.tofixed(2))
