// script.js

// Variáveis globais para controlar a leitura
let synthesizer = window.speechSynthesis;
let currentUtterance = null;
let isReading = false;

// Função para ler em voz alta o texto
function lerTexto(texto) {
    if (currentUtterance) {
        synthesizer.cancel(); // Cancela qualquer leitura anterior
    }
    
    currentUtterance = new SpeechSynthesisUtterance(texto);
    currentUtterance.lang = 'pt-BR';
    synthesizer.speak(currentUtterance);
    isReading = true;
}

// Seleciona todas as frases
const frases = document.querySelectorAll('.frase');

// Adiciona o evento de mouseover a cada frase
frases.forEach(frase => {
    frase.addEventListener('mouseover', () => {
        lerTexto(frase.textContent); // Lê o texto da frase quando o mouse passa por cima
    });
});

// Função para ler todo o conteúdo da página
function lerPagina() {
    const textoCompleto = [...document.querySelectorAll('.frase')]
        .map(frase => frase.textContent)
        .join(' '); // Junta todo o texto em uma string
    lerTexto(textoCompleto);
}

// Função para parar a leitura
function pararLeitura() {
    synthesizer.cancel();
    isReading = false;
}

// Botões de controle de leitura
document.getElementById('iniciar-leitura').addEventListener('click', () => {
    if (!isReading) {
        lerPagina();
    }
});

document.getElementById('parar-leitura').addEventListener('click', pararLeitura);
