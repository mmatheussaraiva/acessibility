const header = document.getElementById('header');  

// Adiciona um evento para mostrar o header quando o mouse estiver na área do main  
document.querySelector('main').addEventListener('mouseenter', () => {  
    header.classList.add('show');  
});  

// Adiciona um evento para esconder o header quando o mouse sair da área do main  
document.querySelector('main').addEventListener('mouseleave', () => {  
    header.classList.remove('show');  
});