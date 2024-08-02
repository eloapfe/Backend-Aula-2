document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const usernameCorrect = 'usuario';
    const passwordCorrect = 'senha123';

    if (usernameInput === usernameCorrect && passwordInput === passwordCorrect) {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Erro: Nome de usuário ou senha incorretos. Tente novamente.';
        errorMessage.style.display = 'block';
    }
});
