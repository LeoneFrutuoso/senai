function gerarRelatorio() {
    // 1. Captura quantos dias tem a Sprint
    let totalDias = parseInt(prompt("Quantos dias possui a Sprint?"));
    
    // Validação simples para garantir que o usuário digitou um número válido
    if (isNaN(totalDias) || totalDias <= 0) {
        alert("Por favor, insira um número válido de dias.");
        return;
    }

    // Variável acumuladora para somar o total de tarefas da Sprint inteira
    let totalTarefasSprint = 0;
    
    // Variável para armazenar o texto que será jogado no HTML
    let conteudoHTML = "<h3>Progresso Diário:</h3><ul>";

    // 2. O Laço FOR: começa no dia 1 e vai até o total de dias informado
    for (let dia = 1; dia <= totalDias; dia++) {
        
        // Pergunta a quantidade de tarefas concluídas no dia atual do laço
        let tarefasDoDia = parseInt(prompt(`Quantas tarefas foram concluídas no Dia ${dia}?`));
        
        // Se o usuário cancelar ou não digitar um número, consideramos 0
        if (isNaN(tarefasDoDia)) tarefasDoDia = 0;

        // Somamos as tarefas do dia ao total geral (Acumulador)
        totalTarefasSprint += tarefasDoDia;

        // Adicionamos a linha correspondente ao HTML
        conteudoHTML += `<li><strong>Dia ${dia}:</strong> ${tarefasDoDia} tarefa(s) concluída(s).</li>`;
    }

    // Fecha a lista aberta no início
    conteudoHTML += "</ul>";

    // 3. Exibe o Relatório Final com o total acumulado
    conteudoHTML += `
        <hr>
        <h4><strong>Relatório Final</strong></h4>
        <p>O total de tarefas concluídas durante toda a Sprint de ${totalDias} dias foi: <strong>${totalTarefasSprint} tarefas</strong>.</p>
    `;

    // Injeta todo o conteúdo construído dentro da DIV no HTML
    document.getElementById("resultado").innerHTML = conteudoHTML;
}