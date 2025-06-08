const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  mensagem.textContent = 'Olá, Seja Bem-Vindo a minha primeira página web!';
  mensagem.style.display = 'block';
});

