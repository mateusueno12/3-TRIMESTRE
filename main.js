// Atividade 1
const form1 = document.querySelector("#form1");
const inNome = document.querySelector("#inNome");
const saida1 = document.querySelector("#saida1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  saida1.innerText = `Olá, ${inNome.value}! Seja bem-vindo(a)!`;
});

// Atividade 2
const form2 = document.querySelector("#form2");
const inNome2 = document.querySelector("#inNome2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Você digitou: ${inNome2.value}`);
});

// Atividade 3
const form3 = document.querySelector("#form3");
const inModelo = document.querySelector("#inModelo");
const inValor = document.querySelector("#inValor");
const saida3 = document.querySelector("#saida3");

form3.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = inModelo.value;
  const valor = Number(inValor.value);

  if (!modelo || valor <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  const entrada = valor * 0.5;
  const parcela = (valor - entrada) / 12;

  saida3.innerText = `Modelo: ${modelo}\nEntrada: R$ ${entrada.toFixed(2)}\n12x de R$ ${parcela.toFixed(2)}`;
});

// Atividade 4
const form4 = document.querySelector("#form4");
const inPreco = document.querySelector("#inPreco");
const inPeso = document.querySelector("#inPeso");
const saida4 = document.querySelector("#saida4");

form4.addEventListener("submit", (e) => {
  e.preventDefault();

  const precoKg = Number(inPreco.value);
  const peso = Number(inPeso.value);

  if (precoKg <= 0 || peso <= 0) {
    alert("Valores inválidos!");
    return;
  }

  const valor = (precoKg / 1000) * peso;
  saida4.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
});
