let botao = document.getElementById('btnGerarRelatorio');

botao.addEventListener('click', function() {
    // Adicionamos a validação aqui também
    let entradaDias = prompt("Quantos dias teve a Sprint?");
    let diasSprint = parseInt(entradaDias);

    if (isNaN(diasSprint) || diasSprint <= 0) {
        alert("Por favor, digite um número de dias válido!");
        return; // Interrompe o código se não for um número
    }

    let totalBugs = 0;
    let textoRelatorio = "";

    for (let dia = 1; dia <= diasSprint; dia++) {
        let bugsDoDia = parseInt(prompt("Quantos bugs no dia " + dia + "?"));
        if (isNaN(bugsDoDia)) {
            bugsDoDia = 0;
        }
        
        totalBugs += bugsDoDia;
        textoRelatorio += "Dia " + dia + ": " + bugsDoDia + " bugs\n";
    }

    let media = totalBugs / diasSprint;
    
    textoRelatorio += "--------------------------\n";
    textoRelatorio += "Total de bugs: " + totalBugs + "\n";
    textoRelatorio += "Média de bugs por dia: " + media.toFixed(2);

    document.getElementById('relatorioTexto').value = textoRelatorio;
});