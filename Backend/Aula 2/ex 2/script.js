const form = document.getElementById('imc-form');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularButton = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

calcularButton.addEventListener('click', (e) => {
    e.preventDefault();

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / Math.pow(altura, 2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)} - ${classificacao}`;
});