document.getElementById('btnIniciar').addEventListener('click', iniciarJogo);

function iniciarJogo() {
    alert("Roque teve a ideia de criar o festival 'Rock in Reels'. Ele já garantiu a Jota Qwert, mas precisa da segunda atração.");
    
    let escolha1 = prompt("Roque foi falar com as Tias Fofinhas. Elas exigem 50 toalhas de crochê. \n1 - Falar a verdade\n2 - Mentir");

    if (escolha1 === "1") {
        alert("Elas apreciaram a sinceridade! Prometeram levar as próprias toalhas e indicaram o grupo 'Yasmina e os Manos'.");
        let escolhaYasmina = prompt("Yasmina pediu para marcar o grupo em todas as postagens. Aceitar? (s/n)");
        
        if (escolhaYasmina.toLowerCase() === "s") {
            faseHorrivelTrio();
        } else {
            alert("Fim: O evento não viralizou e perdeu o impulso.");
        }
    } else {
        alert("Você mentiu sobre as toalhas, elas descobriram e pularam fora! A Jota Qwert também saiu. Seu pai oferece o salão da associação e dinheiro.");
        let escolhaPai = prompt("Aceitar o contrato do seu pai? (s/n)");
        
        if (escolhaPai.toLowerCase() === "n") {
            alert("Você recusou! Roque compôs 'Perdão'. As Tias Fofinhas se emocionaram e o festival foi salvo.");
        } else {
            alert("Fim: O festival é um sucesso, mas apenas no submundo da música.");
        }
    }
}

function faseHorrivelTrio() {
    alert("Evento bombando! O 'Horrível Trio' quer tocar.");
    let escolhaTrio = prompt("Aceitar o Horrível Trio? (s/n)");
    
    if (escolhaTrio.toLowerCase() === "s") {
        alert("Sucesso absoluto! Jeferson Bezerra (CEO) quer o evento na nova rede dele, mas pede para cortar as bandas cover.");
        let escolhaCEO = prompt("Aceitar proposta e cortar as bandas cover? (s/n)");
        if (escolhaCEO.toLowerCase() === "n") {
            alert("Fim: Sucesso total! Bezerra liberou os direitos e o festival é histórico.");
        } else {
            alert("Fim: Onda de cancelamento! O público não perdoou o corte das bandas originais.");
        }
    } else {
        alert("Fim: O evento teve relevância por conta de Yasmina, mas nunca decolou completamente.");
    }
}