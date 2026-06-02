function testar(){
let n = parseInt(Math.random()*10)

console.log(n)
dinoSorteado = converterParaDinossauro(n)
console.log(dinoSorteado)


}

function escolherDino(){

    
}






function converterParaDinossauro(n){
let dino =''
if(n == 0){
 dino = 'Espinossauro'
}else if(n == 1){


dino = 'T-rex'
}else if(n ==2){
    dino = 'Braquinossauro'
}else if(n ==3 ){
dino = 'Velociraptor'

}else if (n== 4){
    dino = 'Estegnossauro'
}








return dino
 
}











