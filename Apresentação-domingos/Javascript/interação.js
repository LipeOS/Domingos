// Função que altera o conteúdo dinâmico da página
function changeContent(content) {
    const contentDiv = document.getElementById('dynamic-content');
    
    // Altera o conteúdo dependendo do botão clicado
    if (content === 'texto1') {
        contentDiv.innerHTML = '<p>Este é o conteúdo do Texto 1!</p>';
    } else if (content === 'texto2') {
        contentDiv.innerHTML = '<p>Este é o conteúdo do Texto 2!</p>';
    }
}

// Função para trocar a imagem dinamicamente
function changeImage(image) {
    const imageElement = document.getElementById('dynamic-image');
    
    // Altera a imagem dependendo do botão clicado
    if (image === 'imagem1') {
        imageElement.src = '../img/1.png';
        imageElement.alt = 'Imagem 1';
        
    } else if (image === 'imagem2') {
        imageElement.src = '../img/2.png';
        imageElement.alt = 'Imagem 2';
    }
}

// Função de validação de formulário
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Verifica se o campo "Nome" está vazio
    if (name === '') {
        alert('Por favor, preencha o campo Nome.');
        return false; // Impede o envio do formulário
    }

    // Verifica se o campo "Email" está vazio
    if (email === '') {
        alert('Por favor, preencha o campo Email.');
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver preenchido, o formulário pode ser enviado
    alert('Formulário enviado com sucesso!');
    return true;
}
