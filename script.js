const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const eml = 'tryber@teste.com';
  const psswrd = '123456';
  if (email === eml && password === psswrd) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
