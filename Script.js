let fontSizeIndex = 2; // Índice inicial (tamanho padrão)
const fontSizes = ['12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '30px'];
let isHighContrast = false;

// Função para aumentar o tamanho da fonte
function increaseFontSize() {
    if (fontSizeIndex < fontSizes.length - 1) {
        fontSizeIndex++;
        document.body.style.fontSize = fontSizes[fontSizeIndex];
    }
}

// Função para diminuir o tamanho da fonte
function decreaseFontSize() {
    if (fontSizeIndex > 0) {
        fontSizeIndex--;
        document.body.style.fontSize = fontSizes[fontSizeIndex];
    }
}

// Função para ativar/desativar o alto contraste
function toggleHighContrast() {
    isHighContrast = !isHighContrast;
    if (isHighContrast) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
}

// Função para restaurar o contraste padrão
function restoreContrast() {
    isHighContrast = false;
    document.body.classList.remove('high-contrast');
}

// Função para fornecer informações sobre o leitor de tela
function screenReaderInfo() {
    alert("O leitor de tela é uma funcionalidade do seu sistema operacional ou navegador. " +
          "No Windows, você pode usar o Narrador pressionando Windows + Ctrl + Enter. " +
          "No Mac, use VoiceOver pressionando Command + F5. " +
          "Em navegadores, verifique as extensões disponíveis para leitores de tela.");
}

// Adicionar event listeners aos botões
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aumentarFont').addEventListener('click', increaseFontSize);
    document.getElementById('diminuirFont').addEventListener('click', decreaseFontSize);
    document.getElementById('altocontraste').addEventListener('click', toggleHighContrast);
    document.getElementById('restaurarcontraste').addEventListener('click', restoreContrast);
    document.getElementById('leitordetela').addEventListener('click', screenReaderInfo);
});
