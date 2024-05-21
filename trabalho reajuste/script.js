let saldo = document.querySelector ("#saldo");
let resultado = document.querySelector ("#resultado");
let btCalcular = document.querySelector ("#btCalcular");

function reajuste(){
    let calculo = Number(saldo.value) + (Number(saldo.value) * 1) / 100
    resultado.value = calculo;
}

btCalcular.onclick = function () {
    reajuste()}