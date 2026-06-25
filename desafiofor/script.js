let totalDias = parseInt(prompt("Quantos dias possui a Sprint?"));
let totalTarefasSprint = 0;
let htmlConteudo = "<ul>";

for (let dia = 1; dia <= totalDias; dia++) {
    let tarefasDoDia = parseInt(prompt(`Quantas tarefas foram concluídas no Dia ${dia}?`));

    if (isNaN(tarefasDoDia)) {
        tarefasDoDia = 0;
    }

    totalTarefasSprint += tarefasDoDia;
    htmlConteudo += `<li>Dia ${dia}: ${tarefasDoDia} tarefas</li>`;
}

htmlConteudo += "</ul>";
htmlConteudo += `<p class="total">Total de tarefas concluídas: ${totalTarefasSprint}</p>`;

document.getElementById("resultado").innerHTML = htmlConteudo;