let codigo = document.querySelector("#codigo")
let produto = document.querySelector("#produto")
let btProcurar = document.querySelector("#btProcurar")

function pesquisar() {
    if (String(codigo.value) == "001") {
        produto.value = "Produto 001 - Parafuso";
    }
    else if (String(codigo.value) == "002") {
        produto.value = "Produto 002 - Porca";
    }
    else if (String(codigo.value) == "003"){
        produto.value = "Produto 003 - Prego";
    }
    else{
        produto.value = "Diversos";
    }
}

btProcurar.onclick = function(){
    pesquisar ()
}

