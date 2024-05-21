let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let result = document.querySelector ("#result");
let btIdentificar = document.querySelector ("#btIdentificar");

function maior(){
    let valornumero1 = Number (valor1.value)
    let valornumero2 = Number (valor2.value)
    if(valornumero1>valornumero2){
        result.value = valornumero1 + "é maior"
    }
    else{
     result.value = valornumero2 + "é maior"
     
    }

}

btIdentificar.onclick = function (){
    maior();
}
 



