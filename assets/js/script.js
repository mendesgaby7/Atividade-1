var textarea = document.getElementById('original');
var span = document.querySelector('span')
var modificado = document.getElementById('modificado');
var efeito = document.getElementById('efeito');
var efeitoAdicionado = "uppercase";



function mudarTexto() {
    console.log(efeitoAdicionado)
    if(efeitoAdicionado == "lowercase") {
        modificado.textContent = textarea.value.toLowerCase()

    }

    if(efeitoAdicionado == "uppercase") {
        modificado.textContent = textarea.value.toUpperCase()

    }
}

textarea.addEventListener('keyup', function (){
    span.innerText = textarea.value.length
    mudarTexto()
})

efeito.addEventListener('change', function (){  
    efeitoAdicionado = efeito.value
    mudarTexto()
})

