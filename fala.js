function lerTexto(event) {
    const texto = event.target.innerText; // Pega o texto do elemento
    const synth = window.speechSynthesis; // Acessa a API SpeechSynthesis
    const speech = new SpeechSynthesisUtterance(texto); // Cria a instância de leitura
    
    // Define a língua como português
    speech.lang = "pt-BR";

    // Faz a leitura do texto
    synth.speak(speech);
}

// Adiciona o evento para todos os parágrafos
const parágrafos = document.querySelectorAll('p');
parágrafos.forEach(parágrafo => {
    parágrafo.addEventListener('mouseover', lerTexto); // Ao passar o mouse, lê o texto
});