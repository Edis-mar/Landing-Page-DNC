var leonardo = window.document.getElementById("leo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")
var setadireita = window.document.getElementById("seta-direita")

function rolarparadireita(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style="display:flex"
}
function rolarparaesquerda(){
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setadireita.style="display:flex"
    setaesquerda.style="display:none"
}