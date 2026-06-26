function gerarRelatorio() {
    let totalDias = parseInt(prompt("Quantos dias teve a Sprint?"));

    if (isNaN(totalDias) || totalDias <= 0) {
        alert("Por favor, insira um número válido de dias.");
        return;
    }

    let totalBugs = 0;
    let maiorBugs = -1;
    let menorBugs = Infinity;
    let diaMaior = 0;
    let diaMenor = 0;
    let textoRelatorio = "=== RELATÓRIO DIÁRIO DE BUGS ===\n";

    for (let dia = 1; dia <= totalDias; dia++) {
        let bugsDoDia = parseInt(prompt(`Quantos bugs foram encontrados no Dia ${dia}?`));

        if (isNaN(bugsDoDia) || bugsDoDia < 0) {
            bugsDoDia = 0;
        }

        totalBugs += bugsDoDia;
        textoRelatorio += `Dia ${dia}: ${bugsDoDia} bug(s) encontrado(s)\n`;

        if (bugsDoDia > maiorBugs) {
            maiorBugs = bugsDoDia;
            diaMaior = dia;
        }

        if (bugsDoDia < menorBugs) {
            menorBugs = bugsDoDia;
            diaMenor = dia;
        }
    }

    let mediaBugs = totalBugs / totalDias;

    textoRelatorio += "\n=== RESUMO FINAL ===\n";
    textoRelatorio += `Total de bugs na Sprint: ${totalBugs}\n`;
    textoRelatorio += `Média de bugs por dia: ${mediaBugs.toFixed(2)}\n`;
    textoRelatorio += `Dia com MAIOR quantidade: Dia ${diaMaior} (${maiorBugs} bugs)\n`;
    textoRelatorio += `Dia com MENOR quantidade: Dia ${diaMenor} (${menorBugs} bugs)\n`;

    document.getElementById("relatorio").value = textoRelatorio;
}