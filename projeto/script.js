// Função para lidar com o cadastro normal
function realizarCadastro() {
    const nome = document.getElementById('nomeUsuario').value;
    if (nome.trim() === "") {
        alert("Por favor, informe seu nome ou um apelido de sua preferência para entrar.");
        return;
    }
    entrarNoSite(nome);
}

// Função para o modo totalmente anônimo
function entrarComoAnonimo() {
    entrarNoSite("amigo(a)");
}

// Libera o acesso para o esquema de duas colunas do seu layout
function entrarNoSite(nomeExibicao) {
    document.getElementById('telaCadastro').style.display = 'none';
    document.getElementById('sitePrincipal').style.display = 'flex';
    document.getElementById('boasVindasTexto').innerHTML = `Olá, ${nomeExibicao}. Como posso deixar o seu coração mais leve hoje?`;
}

// Lógica inteligente que varre o desabafo atrás de palavras-chave
function buscarSolucao() {
    const desabafo = document.getElementById('problemaInput').value.toLowerCase();
    const caixaResposta = document.getElementById('resposta');

    if (desabafo.trim() === "") {
        caixaResposta.style.display = "block";
        caixaResposta.style.background = "#fef08a";
        caixaResposta.style.borderLeftColor = "#eab308";
        caixaResposta.style.color = "#713f12";
        caixaResposta.innerHTML = "<strong>Espaço Amigo:</strong> Por favor, fique à vontade para escrever algo na caixinha antes de enviar. Estou aqui para te ouvir. 😊";
        return;
    }

    // Configuração visual padrão do balão verde lindo
    caixaResposta.style.display = "block";
    caixaResposta.style.background = "linear-gradient(135deg, #e6fcf5 0%, #ccfbf1 100%)";
    caixaResposta.style.borderLeftColor = "#20c997";
    caixaResposta.style.color = "#047857";

    // Testando as palavras chaves inseridas no desabafo
    if (desabafo.includes("ansia") || desabafo.includes("ansiedade") || desabafo.includes("ansioso") || desabafo.includes("ansiosa")) {
        caixaResposta.innerHTML = `<strong>Espaço Amigo (Foco em Ansiedade):</strong> Eu entendo perfeitamente como a ansiedade faz tudo parecer acelerado e assustador. Quando se sentir assim, tente focar no agora. Vamos acalmar o corpo? <br><br> 🍃 <strong>Técnica de Respiração:</strong> Inspire pelo nariz contando até 4... Segure o ar por 4 segundos... E solte suavemente pela boca contando até 6. Faça isso agora mesmo. O controle está com você.`;
    } 
    else if (desabafo.includes("triste") || desabafo.includes("tristeza") || desabafo.includes("chora") || desabafo.includes("mal")) {
        caixaResposta.innerHTML = `<strong>Espaço Amigo (Acolhimento):</strong> Sinto muito que as coisas estejam pesadas e nubladas hoje. Lembre-se de que chorar ou se sentir desanimado não significa fraqueza, faz parte do nosso processo de cura. Não se cobre tanto hoje. Respeite seu tempo e descanse. Amanhã é uma nova oportunidade. 🤍`;
    } 
    else if (desabafo.includes("sozinho") || desabafo.includes("sozinha") || desabafo.includes("solidao") || desabafo.includes("solidão")) {
        caixaResposta.innerHTML = `<strong>Espaço Amigo (Conexão):</strong> A mente adora nos fazer acreditar que estamos completamente sozinhos, mas isso não é verdade. Você importa, e sua história tem valor. Se puder, procure conversar com alguém querido ou continue usando este espaço seguro para colocar tudo para fora. Nós estamos aqui com você. ✨`;
    } 
    else {
        caixaResposta.innerHTML = `<strong>Espaço Amigo:</strong> Obrigado por confiar em mim e compartilhar seu coração. Só o ato de escrever e colocar para fora já ajuda a aliviar a mente. Tire um instante para beber uma água, respirar fundo e lembrar: nenhuma tempestade dura para sempre. Você é forte!`;
    }
    
    // Limpa a caixinha após o clique para novos desabafos
    document.getElementById('problemaInput').value = "";
}

// Resposta ao clicar nas opções da barra lateral do seu desenho
function filtrarTema(tema) {
    const caixaResposta = document.getElementById('resposta');
    caixaResposta.style.display = "block";
    caixaResposta.style.background = "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)";
    caixaResposta.style.borderLeftColor = "#3b82f6";
    caixaResposta.style.color = "#1e40af";
    caixaResposta.innerHTML = `<strong>Guia Prático de ${tema}:</strong> Você acessou os recursos recomendados. Estamos montando dicas exclusivas, textos de psicólogos e áudios de meditação focados em ajudar você a passar pela ${tema.toLowerCase()} com mais leveza.`;
}