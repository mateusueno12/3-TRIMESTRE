// Atividade 1 - Programa Olá Você!
const form1 = document.querySelector('#atividade1 form');
const resp1 = document.querySelector('#resp1');

form1.addEventListener('submit', (e) => {
    const nome = document.querySelector('#inNome').value;
    resp1.innerText = `Olá, ${nome}!`;
    e.preventDefault();
});

// Atividade 2 - Cine Barão
const form2 = document.querySelector('#atividade2 form');
const resp2a = document.querySelector('#resp2a');
const resp2b = document.querySelector('#resp2b');

form2.addEventListener('submit', (e) => {
    const titulo = document.querySelector('#inTitulo').value;
    const duracao = Number(document.querySelector('#inDuracao').value);

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    resp2a.innerText = titulo;
    resp2b.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    e.preventDefault();
});

// Atividade 3 - Revenda de Veículos
const form3 = document.querySelector('#atividade3 form');
const resp3a = document.querySelector('#resp3a');
const resp3b = document.querySelector('#resp3b');
const resp3c = document.querySelector('#resp3c');

form3.addEventListener('submit', (e) => {
    const veiculo = document.querySelector('#inVeiculo').value;
    const preco = Number(document.querySelector('#inPreco').value);

    const entrada = preco * 0.50;
    const parcela = entrada / 12;

    resp3a.innerText = `Promoção: ${veiculo}`;
    resp3b.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3c.innerText = `+12x de R$ ${parcela.toFixed(2)}`;
    e.preventDefault();
});
