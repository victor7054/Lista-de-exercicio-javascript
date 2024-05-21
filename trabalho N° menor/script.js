let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let valor3 = document.querySelector("#valor3")
let valor4 = document.querySelector("#valor4")
let resultado = document.querySelector("#resultado")
let btIdentificar = document.querySelector("#btIdentificar")


function menor() {
    let valornumero1 = Number(valor1.value)
    let valornumero2 = Number(valor2.value)
    let valornumero3 = Number(valor3.value)
    let valornumero4 = Number(valor4.value)
    let menorNumero = valornumero1

    if (menorNumero > valornumero2) {
        menorNumero = valornumero2

    }

    if (menorNumero > valornumero3) {
        menorNumero = valornumero3


    } if (menorNumero > valornumero4) {
        menorNumero = valornumero4
    }

    resultado.value = menorNumero + "é menor"

}

btIdentificar.onclick = function () {
    menor();
}