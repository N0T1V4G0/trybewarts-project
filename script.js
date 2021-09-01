const email = document.getElementById('email');
const senha = document.getElementById('password');
// console.log(email);
// console.log(senha);

const botaoEnter = document.getElementById('loginEnter');
// console.log(botaoEnter);

function verificacao() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botaoEnter.addEventListener('click', verificacao);

// Requisito 18
const botao = document.getElementById('submit-btn');
const confirmacao = document.getElementById('agreement');

function confirmar() {
  if (botao.disabled) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

confirmacao.addEventListener('click', confirmar);

// Requisito 20
const caixaValores = document.getElementById('textarea');

function contar() {
  const contador = document.getElementById('counter');
  const entradaLetras = caixaValores.value.length;
  contador.innerHTML = 500 - entradaLetras;
}

caixaValores.addEventListener('keyup', contar);

// Requisito 21
const formularioPrincipal = document.getElementById('evaluation-form');
const nomeFormulario = document.getElementById('input-name');
const sobrenomeFormulario = document.getElementById('input-lastname');
const emailFormulario = document.getElementById('input-email');

function valorCasa() {
  const listaCasa = document.getElementById('house').children;
  for (let index = 0; index < listaCasa.length; index += 1) {
    if (listaCasa[index].selected) {
      return listaCasa[index].value;
    }
  }
}

function valorFamilia() {
  const listaFamilia = document.getElementsByClassName('family');
  for (let index = 0; index < listaFamilia.length; index += 1) {
    if (listaFamilia[index].checked) {
      return listaFamilia[index].value;
    }
  }
}

function valorConteudo() {
  const listaConteudo = document.getElementsByClassName('subject');
  const listaValores = [];
  for (let index = 0; index < listaConteudo.length; index += 1) {
    if (listaConteudo[index].checked) {
      listaValores.push(listaConteudo[index].value);
    }
  }
  return listaValores.join(', ');
}

function valorNota() {
  const listaNota = document.getElementsByClassName('rate');
  for (let index = 0; index < listaNota.length; index += 1) {
    if (listaNota[index].checked) {
      return listaNota[index].value;
    }
  }
}

function returnandoDados() {
  return `<p>Nome: ${nomeFormulario.value} ${sobrenomeFormulario.value}</p>
          <p>Email: ${emailFormulario.value}</p>
          <p>Casa: ${valorCasa()}</p>
          <p>Família: ${valorFamilia()}</p>
          <p>Matérias: ${valorConteudo()}</p>
          <p>Avaliação: ${valorNota()}</p>
          <p>Observações: ${caixaValores.value}</p>`;
}

botao.addEventListener('click', event => {
  event.preventDefault();
  const saidaDados = document.createElement('p');
  saidaDados.innerHTML = returnandoDados();
  // console.log(saidaDados);
  formularioPrincipal.appendChild(saidaDados);
});
