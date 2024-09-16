const form = document.querySelector('form');
const button = document.querySelector('button');
const span = document.querySelector('span');
const a = document.querySelector('a');
const p = document.getElementById('form-text');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-text');
const login = document.getElementById('login');
const password = document.getElementById('password');

function showPassword() {
  if (login.value !== '') {
    showHelloWorld();
  } else {
    p.innerHTML = 'Por favor, informe seu usuário';
    p.classList.remove('invisible');
  }

}

function showHelloWorld() {
  p.innerHTML = `Incorreta! A senha do usuário ${login.value} é: <b
    class="text-green-400 font-black">Hello-World</b>`;

  if (p.classList.contains('invisible')) {
    p.classList.remove('invisible');
  }
}

function hello() {
  if (password.value === 'Hello-World') {
    // alert(`Bem-vindo(a), ${login.value}!`);
    modalContent.textContent = `Bem-vindo(a), ${login.value}`;
    modal.classList.remove('hidden');
  }
}

form.addEventListener(('submit'), (e) => {
  e.preventDefault();
  showHelloWorld();
  hello();
})

a.addEventListener(('click'), showPassword)

span.addEventListener(('click'), () => modal.classList.add('hidden'))