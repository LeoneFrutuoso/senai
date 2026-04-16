programa {
  funcao inicio() {
   // informacoes  
   real valorTotal,valorDiaria,desconto10
   real desconto15,multa=150,valorBruto
   inteiro dias
   //entrada 
escreva("quantos dias: ")
leia(dias)
// processamento 
se(dias <= 5){
valorDiaria = 100
}senao se( dias>=6 e dias <=10){
  valorDiaria=90
}senao{ valorDiaria=80 
}
  
valorBruto=dias*valorDiaria
   desconto10 =valorBruto*0.1
   desconto15 =valorBruto*0.15
   
    valorTotal = dias*valorDiaria - desconto10 - desconto15 + multa
   
// Escreva("\n============/n")
escreva("valor bruto: R$" + valorBruto)
escreva("\ndesconto1: R$" + desconto10)
escreva("\nDesconto2:R$" + desconto15)
escreva("\nmulta:R$" + multa)
escreva("\n-----------\n")
escreva("totala pagar: R$" + valorTotal)
escreva("\n==============\n")














  }
}
