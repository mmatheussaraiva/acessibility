document.getElementById('increase-small').addEventListener('click', () => {
    changeFontSize(1); // Aumenta o tamanho da fonte em 1px
  });
  
  document.getElementById('increase-large').addEventListener('click', () => {
    changeFontSize(5); // Aumenta o tamanho da fonte em 5px
  });
  
  document.getElementById('decrease-small').addEventListener('click', () => {
    changeFontSize(-1); // Diminui o tamanho da fonte em 1px
  });
  
  document.getElementById('decrease-large').addEventListener('click', () => {
    changeFontSize(-5); // Diminui o tamanho da fonte em 5px
  });
  
  document.getElementById('reset').addEventListener('click', () => {
    resetFontSize(); // Redefine o tamanho da fonte para o valor original
  });
  
  document.getElementById('read-text').addEventListener('click', () => {
    readText(); // Lê o texto da página
  });
  
  document.getElementById('translate-libras').addEventListener('click', () => {
    translateToLibras(); // Traduz o texto para Libras
  });
  
  function changeFontSize(delta) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: (delta) => {
          const body = document.body;
          const style = window.getComputedStyle(body).fontSize;
          const currentFontSize = parseFloat(style);
          body.style.fontSize = (currentFontSize + delta) + 'px';
        },
        args: [delta]
      });
    });
  }
  
  function resetFontSize() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          document.body.style.fontSize = ''; 
        }
      });
    });
  }
  
  function readText() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const text = document.body.innerText; 
          chrome.tts.speak(text, { rate: 1.0, lang: 'pt-BR' }); 
        }
      });
    });
  }
  
  function translateToLibras() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const vLibrasDiv = document.createElement('div');
          vLibrasDiv.id = 'vlibras';
          document.body.appendChild(vLibrasDiv);
  
          const script = document.createElement('script');
          script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
          document.body.appendChild(script);
          
          script.onload = () => {
            const vlibras = new window.VLibras.Widget('https://vlibras.gov.br/app');
          };
        }
      });
    });
  }
  