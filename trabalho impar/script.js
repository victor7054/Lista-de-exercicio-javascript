let valor1 = document.querySelector ("#valor1")
let verificar = document.querySelector ("#verificar")
let btIdentificar = document.querySelector ("#btIdentificar")

function impar (){
    if(Number (valor1.value) %2!=0) {
        verificar.value = valor1.value + "é ímpar"
    }
    else(
        verificar.value = valor1.value + "é par"
        )
        
}

btIdentificar.onclick = function(){
    impar()
}

