// Lógica para login convencional
function realizarCadastro() {
    const nome = document.getElementById('nomeUsuario').value;
    if (nome.trim() === "") {
        alert("Por favor, digite o seu nome ou um apelido para entrar.");
        return;
    }
    entrarNoSite(nome);
}

// Lógica para o modo anônimo sugerido
function entrarComoAnonimo() {
    entrarNoSite("amigo(a)");
}

// Exibe o painel principal
function entrarNoSite(nomeExibicao) {
    document.getElementById('telaCadastro').style.display = 'none';
    document.getElementById('sitePrincipal').style.display = 'flex';
    document.getElementById('boasVindasTexto').innerHTML = `Olá, ${nomeExibicao}. Como posso deixar o seu coração mais leve hoje?`;
}

// Respostas inteligentes baseadas no que foi digitado
function buscarSolucao() {
    const desabafo = document.getElementById('problemaInput').value.toLowerCase();
    const caixaResposta = document.getElementById('resposta');

    if (desabafo.trim() === "") {
        caixaResposta.style.display = "block";
        caixaResposta.style.background = "#fff3cd";
        caixaResposta.style.borderLeftColor = "#ffc107";
        caixaResposta.style.color = "#664d03";
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> Por favor, escreva algo para que eu possa te escutar.";
        return;
    }

    // Resposta padrão caso as caixas estejam normais
    caixaResposta.style.display = "block";
    caixaResposta.style.background = "#e8f5e9";
    caixaResposta.style.borderLeftColor = "#198754";
    caixaResposta.style.color = "#1b5e20";

    if (desabafo.includes("ansia") || desabafo.includes("ansiedade") || desabafo.includes("ansioso")) {
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> A ansiedade faz tudo parecer urgente. Respire fundo, segure por 4 segundos e solte devagar. Foque apenas no momento de agora. Vai dar tudo certo.";
    } else if (desabafo.includes("triste") || desabafo.includes("tristeza") || desabafo.includes("mal")) {
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> Sinto muito que esteja passando por um dia cinzento. Não se cobre para ficar bem imediatamente, tudo bem descansar e respeitar seu tempo.";
    } else if (desabafo.includes("sozinho") || desabafo.includes("sozinha")) {
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> Você não está só, mesmo quando sua mente tenta te convencer disso. Conte comigo e com este espaço para desabafar sempre.";
    } else {
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> Obrigado por colocar em palavras o que está sentindo. Dividir o fardo torna a caminhada mais leve. Continue forte.";
    }

    document.getElementById('problemaInput').value = "";
}

// Filtros da barra lateral
function filtrarTema(tema) {
    const caixaResposta = document.getElementById('resposta');
    caixaResposta.style.display = "block";
    caixaResposta.style.background = "#e3f2fd";
    caixaResposta.style.borderLeftColor = "#0d6efd";
    caixaResposta.style.color = "#0a58ca";
    caixaResposta.innerHTML = `<strong>Guia de ${tema}:</strong> Separamos dicas essenciais e práticas de bem-estar para te ajudar a lidar melhor com episódios de ${tema.toLowerCase()}.`;
}