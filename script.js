const button = document.getElementById('btn');

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const eml = 'tryber@teste.com';
  const psswrd = '123456';
  console.log(email);
  console.log('clicado');
  if (email === eml && password === psswrd) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', login());