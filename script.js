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

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

agreement.addEventListener('change', () => {
  const checkBox = agreement.checked;
  if (checkBox === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
