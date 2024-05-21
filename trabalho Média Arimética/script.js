let valor1 = document.querySelector ("#valor1")
let valor2 = document.querySelector ("#valor2")
let valor3 = document.querySelector ("#valor3")
let media = document.querySelector ("#media")
let ponderada = document.querySelector("#ponderada")
let somaMedia = document.querySelector("#somaMedia")
let mediaDasMedia = document.querySelector ("#mediaDasMedia")
let btCalcular = document.querySelector ("#btCalcular")

function calcular()  {
    media.value = (Number(valor1.value) + Number(valor2.value) + Number(valor3.value)) /3 

    ponderada.value = (Number(valor1.value)*2 + Number(valor2.value)* 3 + Number(valor3.value)* 5 ) / 10

    somaMedia.value = Number(media.value) + Number(ponderada.value)

    mediaDasMedia.value = (Number(media.value) + Number(ponderada.value) + Number(somaMedia.value)) / 3
}


btCalcular.onclick = function() {
    calcular()
}
