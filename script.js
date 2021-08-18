// ---- code validar campos de numeros ---- //

function somenteNumeros(num) {
  var er = /[^-,|^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

// ---- code formatar máscara dinheiro ---- //

function reaisFormatacao(valor) {
  const valorFinalFormatado = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return valorFinalFormatado;
}

// ----- code step 21 ----- //

const botaoStep21 = document.getElementById("botao-step21");

botaoStep21.addEventListener("click", (e) => {
  e.preventDefault();
  let inputAno = document.getElementById("ano-step21");
  let ano = parseInt(inputAno.value);
  let textoResposta21 = document.getElementById("text-response-step21");
  if (inputAno.value.length == 0) {
    textoResposta21.innerHTML =
      '<p class="mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
      textoResposta21.innerHTML =
        '<p class="mt-3 mb-0">' + ano + " é um ano bissexto!</p>";
      inputAno.value = "";
    } else {
      textoResposta21.innerHTML =
        '<p class="mt-3 mb-0">' + ano + " não é um ano bissexto.</p>";
      inputAno.value = "";
    }
  }
});

// ----- code step 22 ----- //

const botaoStep22 = document.getElementById("botao-step22");

botaoStep22.addEventListener("click", (e) => {
  let inputData = document.getElementById("data-step22").value;
  let data = new Date(inputData);
  let anoNascimento = data.getFullYear();
  let mesNascimento = data.getMonth() + 1;
  let diaNascimento = data.getDate() + 1;
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let idade = anoAtual - anoNascimento;
  if (mesAtual < mesNascimento) {
    idade--;
  } else {
    if (mesAtual == mesNascimento) {
      if (new Date().getDate() < diaNascimento) {
        idade--;
      }
    }
  }
  let textoResposta22 = document.getElementById("text-response-step22");
  if (inputData.length == 0 || inputData == "00/00/0000") {
    textoResposta22.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (idade < 18) {
      let anosQueFaltam = 18 - idade;
      textoResposta22.innerHTML =
        '<p class="mt-3 mb-0"> Espere ' +
        anosQueFaltam +
        (anosQueFaltam == 1 ? " ano" : " anos") +
        " pra você se alistar!</p>";
    }
    if (idade == 18) {
      textoResposta22.innerHTML =
        '<p class="mt-3 mb-0"> Você DEVE se alistar nessa idade!</p>';
    }
    if (idade > 18) {
      let anosPassados = idade - 18;
      textoResposta22.innerHTML =
        '<p class="mt-3 mb-0"> Você está ' +
        anosPassados +
        (anosPassados == 1 ? " ano" : " anos") +
        " atrasado!</br> Melhor ir se alistar logo, ein?!</p>";
    }
  }
});

// ----- code step 23 ----- //

const botaoStep23 = document.getElementById("botao-step23");

botaoStep23.addEventListener("click", (e) => {
  let inputNome = document.getElementById("nome-step23");
  let inputGenero = document.getElementById("genero-step23");
  let inputPreco = document.getElementById("preco-step23");
  let nome = inputNome.value;
  let genero = inputGenero.value;
  let preco = parseInt(inputPreco.value);
  let textoResposta23 = document.getElementById("text-response-step23");
  if (inputNome.value.length == 0 || inputPreco.length == 0) {
    textoResposta23.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (genero == "masculino") {
      let calculoDesconto = (preco * 5) / 100;
      let precoFinalMasculino = preco - calculoDesconto;
      let precoFinal = reaisFormatacao(precoFinalMasculino);
      textoResposta23.innerHTML =
        '<p class="mt-3 mb-0">' +
        nome.toUpperCase() +
        ", com seu desconto você vai pagar apenas " +
        precoFinal +
        "!</p>";
        inputNome.value='';
        inputGenero.value="masculino";
        inputPreco.value='';
    }
    if (genero == "feminino") {
      let calculoDesconto = (preco * 13) / 100;
      let precoFinalFeminino = preco - calculoDesconto;
      let precoFinal = reaisFormatacao(precoFinalFeminino);
      textoResposta23.innerHTML =
        '<p class="mt-3 mb-0">' +
        nome.toUpperCase() +
        ", com seu desconto você vai pagar apenas " +
        precoFinal +
        "!</p>";
        inputNome.value='';
        inputGenero.value="masculino";
        inputPreco.value='';
    }
  }
});

// ----- code step 24 ----- //

const botaoStep24 = document.getElementById("botao-step24");

function somenteNumerosStep24(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
}

botaoStep24.addEventListener("click", (e) => {
  let inputKm = document.getElementById("kilometros-step24");
  let km = parseFloat(inputKm.value);
  let textoResposta24 = document.getElementById("text-response-step24");
  if (inputKm.value.length == 0) {
    textoResposta24.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (km <= 200) {
      let calculoPreco = 0.5 * km;
      let precoFinal = reaisFormatacao(calculoPreco);
      textoResposta24.innerHTML =
        '<p class="mt-3 mb-0">O preço da sua passagem será de ' +
        precoFinal +
        "</p>";
      inputKm.value = "";
    }
  }
  if (km > 200) {
    let calculoPreco = 0.45 * km;
    let precoFinal = reaisFormatacao(calculoPreco);
    textoResposta24.innerHTML =
      '<p class="mt-3 mb-0">O preço da sua passagem será de ' +
      precoFinal +
      "</p>";
    inputKm.value = "";
  }
});

// ----- code step 25 ----- //

const botaoStep25 = document.getElementById("botao-step25");

botaoStep25.addEventListener("click", (e) => {
  e.preventDefault();
  let valorA = document.getElementById("valorA-step25");
  let valorB = document.getElementById("valorB-step25");
  let valorC = document.getElementById("valorC-step25");
  let A = parseInt(valorA.value);
  let B = parseInt(valorB.value);
  let C = parseInt(valorC.value);
  let textoResposta25 = document.getElementById("text-response-step25");
  if (
    valorA.value.length == 0 ||
    valorB.value.length == 0 ||
    valorC.value.length == 0
  ) {
    textoResposta25.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (A < B + C && B < A + C && C < A + B) {
      textoResposta25.innerHTML =
        '<p class="mt-3 mb-0"> Os valores ' +
        A +
        ", " +
        B +
        " e " +
        C +
        " podem formar um triângulo sim!</p>";
      valorA.value = "";
      valorB.value = "";
      valorC.value = "";
    } else {
      textoResposta25.innerHTML =
        '<p class="mt-3 mb-0"> Os valores ' +
        A +
        ", " +
        B +
        " e " +
        C +
        " não podem formar um triângulo.</p>";
      valorA.value = "";
      valorB.value = "";
      valorC.value = "";
    }
  }
});

// ----- code step 26 ----- //

const botaoStep26 = document.getElementById("botao-step26");

botaoStep26.addEventListener("click", (e) => {
  e.preventDefault();
  let valorA = document.getElementById("numA-step26");
  let valorB = document.getElementById("numB-step26");
  let A = parseInt(valorA.value);
  let B = parseInt(valorB.value);
  let textoResposta26 = document.getElementById("text-response-step26");
  if (valorA.value.length == 0 || valorB.value.length == 0) {
    textoResposta26.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (A > B) {
      textoResposta26.innerHTML =
        '<p class="mt-3 mb-0">É claro que ' +
        A +
        " é maior que o " +
        B +
        ". Assim é fácil! </p>";
      valorA.value = "";
      valorB.value = "";
    }
    if (A < B) {
      textoResposta26.innerHTML =
        '<p class="mt-3 mb-0">O ' +
        A +
        " é menor que o " +
        B +
        " mesmo, não tenha dúvida! </p>";
      valorA.value = "";
      valorB.value = "";
    }
    if (A === B) {
      textoResposta26.innerHTML =
        '<p class="mt-3 mb-0">Por que você colocou  ' +
        A +
        " nos dois campos? Ai fica sem graça! </p>";
      valorA.value = "";
      valorB.value = "";
    }
  }
});

// ----- code step 27 ----- //

const botaoStep27 = document.getElementById("botao-step27");

botaoStep27.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNomeAluno = document.getElementById("nome-step27");
  let nota1Step27 = document.getElementById("nota1-step27");
  let nota2Step27 = document.getElementById("nota2-step27");
  let nomeAluno = inputNomeAluno.value;
  let nota1 = parseFloat(nota1Step27.value);
  let nota2 = parseFloat(nota2Step27.value);
  let media = (nota1 + nota2) / 2;
  let textoResposta27 = document.getElementById("text-response-step27");
  if (
    nomeAluno.length == 0 ||
    nota1Step27.value.length == 0 ||
    nota2Step27.value.length == 0
  ) {
    textoResposta27.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (media < 4.9) {
      textoResposta27.innerHTML =
        '<p class="mt-3 mb-0"> O aluno ' +
        nomeAluno.toUpperCase() +
        " foi REPROVADO(A) com a média de " +
        media +
        ".</p>";
        inputNomeAluno.value='';
        nota1Step27.value='';
        nota2Step27.value='';
    }
    if (media >= 5 && media <= 6.9) {
      textoResposta27.innerHTML =
        '<p class="mt-3 mb-0"> O aluno ' +
        nomeAluno.toUpperCase() +
        " está de RECUPERAÇÃO. Sua média é de " +
        media +
        ".</p>";
        inputNomeAluno.value='';
        nota1Step27.value='';
        nota2Step27.value='';
    }
    if (media >= 7) {
      textoResposta27.innerHTML =
        '<p class="mt-3 mb-0"> O aluno ' +
        nomeAluno.toUpperCase() +
        " foi APROVADO(A) com a média de " +
        media +
        ".</p>";
        inputNomeAluno.value='';
        nota1Step27.value='';
        nota2Step27.value='';
    }
  }
});

// ----- code step 28 ----- //

const botaoStep28 = document.getElementById("botao-step28");

botaoStep28.addEventListener("click", (e) => {
  e.preventDefault();
  let larguraStep28 = document.getElementById("largura-step28");
  let comprimentoStep28 = document.getElementById("comprimento-step28");
  let largura = parseFloat(larguraStep28.value);
  let comprimento = parseFloat(comprimentoStep28.value);
  let textoResposta28 = document.getElementById("text-response-step28");
  let metroQuadrado = largura * comprimento;
  if (larguraStep28.value.length == 0 || comprimentoStep28.value.length == 0) {
    textoResposta28.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (metroQuadrado <= 100) {
      textoResposta28.innerHTML =
        '<p class="mt-3 mb-0">O Terreno de ' +
        metroQuadrado +
        "m² entra no tipo de terreno POPULAR.</p>";
        larguraStep28.value='';
        comprimentoStep28.value='';
    }
    if (metroQuadrado > 100 && metroQuadrado <= 500) {
      textoResposta28.innerHTML =
        '<p class="mt-3 mb-0">O Terreno de ' +
        metroQuadrado +
        "m² entra no tipo de terreno MASTER.</p>";
        larguraStep28.value='';
        comprimentoStep28.value='';
    }
    if (metroQuadrado > 500)
      textoResposta28.innerHTML =
        '<p class="mt-3 mb-0">O Terreno de ' +
        metroQuadrado +
        "m² entra no tipo de terreno VIP.</p>";
        larguraStep28.value='';
        comprimentoStep28.value='';
  }
});

// ----- code step 29 ----- //

const botaoStep29 = document.getElementById("botao-step29");

botaoStep29.addEventListener("click", (e) => {
  e.preventDefault();
  let inputNome = document.getElementById("nome-step29");
  let inputSalario = document.getElementById("salario-step29");
  let anosTrabalhados = document.getElementById("anos-step28");
  let nome = inputNome.value;
  let salario = parseFloat(inputSalario.value);
  let anos = parseFloat(anosTrabalhados.value);
  let textoResposta29 = document.getElementById("text-response-step29");
  if (
    inputNome.value.length == 0 ||
    inputSalario.value.length == 0 ||
    anosTrabalhados.value.length == 0
  ) {
    textoResposta29.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (anos <= 3) {
      let calculoAumento = (salario * 3) / 100;
      let aumentoSalario = salario + calculoAumento;
      let salarioFinal = reaisFormatacao(aumentoSalario);
      textoResposta29.innerHTML =
        '<p class="mt-3 mb-0">' +
        nome.toUpperCase() +
        ", seu salário teve 3% de aumento e ficará com um total de " +
        salarioFinal +
        "</p>";
      inputNome.value = "";
      inputSalario.value = "";
      anosTrabalhados.value = "";
    }
    if (anos > 3 && anos < 10) {
      let calculoAumento = (salario * 12.5) / 100;
      let aumentoSalario = salario + calculoAumento;
      let salarioFinal = reaisFormatacao(aumentoSalario);
      textoResposta29.innerHTML =
        '<p class="mt-3 mb-0">' +
        nome.toUpperCase() +
        ", seu salário teve 12.5% de aumento e ficará com um total de " +
        salarioFinal +
        "</p>";
      inputNome.value = "";
      inputSalario.value = "";
      anosTrabalhados.value = "";
    }
    if (anos >= 10) {
      let calculoAumento = (salario * 20) / 100;
      let aumentoSalario = salario + calculoAumento;
      let salarioFinal = reaisFormatacao(aumentoSalario);
      textoResposta29.innerHTML =
        '<p class="mt-3 mb-0">' +
        nome.toUpperCase() +
        ", seu salário teve 20% de aumento e ficará com um total de " +
        salarioFinal +
        "</p>";
      inputNome.value = "";
      inputSalario.value = "";
      anosTrabalhados.value = "";
    }
  }
});

// ----- code step 30 ----- //

const botaoStep30 = document.getElementById("botao-step30");

botaoStep30.addEventListener("click", (e) => {
  e.preventDefault();
  let valorA = document.getElementById("valorA-step30");
  let valorB = document.getElementById("valorB-step30");
  let valorC = document.getElementById("valorC-step30");
  let A = parseInt(valorA.value);
  let B = parseInt(valorB.value);
  let C = parseInt(valorC.value);
  let textoResposta30 = document.getElementById("text-response-step30");
  if (
    valorA.value.length == 0 ||
    valorB.value.length == 0 ||
    valorC.value.length == 0
  ) {
    textoResposta30.innerHTML =
      '<p class="mt-3 mb-0" style="color: red"> tem informação faltando ai, não? </p>';
  } else {
    if (A < B + C && B < A + C && C < A + B) {
      if (A === B && B === C) {
        textoResposta30.innerHTML =
          '<p class="mt-3 mb-0"> Esses valores podem formar um triângulo EQUILÁTERO!</p>';
        valorA.value = "";
        valorB.value = "";
        valorC.value = "";
      } else if (A != B && B != C) {
        textoResposta30.innerHTML =
          '<p class="mt-3 mb-0"> Esses valores podem formar um triângulo ESCALENO!</p>';
        valorA.value = "";
        valorB.value = "";
        valorC.value = "";
      } else if (
        (A === B && A != C) ||
        (B === C && B != A) ||
        (C === A && C != B)
      ) {
        textoResposta30.innerHTML =
          '<p class="mt-3 mb-0"> Esses valores podem formar um triângulo ISÓSCELES!</p>';
        valorA.value = "";
        valorB.value = "";
        valorC.value = "";
      }
    } else {
      textoResposta30.innerHTML =
        '<p class="mt-3 mb-0"> Os valores ' +
        A +
        ", " +
        B +
        " e " +
        C +
        " não podem formar um triângulo.</p>";
      valorA.value = "";
      valorB.value = "";
      valorC.value = "";
    }
  }
});
