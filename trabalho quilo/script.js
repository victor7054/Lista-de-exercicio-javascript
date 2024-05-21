let valorQuilo = document.querySelector("#valorQuilo");
let quantidade = document.querySelector("#quantidade");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#btCalcular");

function cobranca() {
    console.log("merda")
    let calculo = Number(valorQuilo.value) * Number(quantidade.value)
    resultado.value = calculo;
}

btCalcular.onclick = function () {
    cobranca();
}
