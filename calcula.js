
function inserirValores(valor) {
    document.getElementById('resultado').value += valor
}

function calcular() {
    const num = document.getElementById('resultado').value
    document.getElementById('resultado').value = eval(num)
}

function limpar() {
    document.getElementById('resultado').value = ''
}

function inverter() {
    calcular()
    const num = document.getElementById('resultado').value
    document.getElementById('resultado').value = num * -1
}

function porcento() {
    const num = document.getElementById('resultado').value
    document.getElementById('resultado').value = num/100  
}