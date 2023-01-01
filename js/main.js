const minNumber = 0; 
const maxNumber = 1000;

const menorValor = document.getElementById('menor-valor');
const maiorValor = document.getElementById('maior-valor');

menorValor.innerHTML = minNumber;
maiorValor.innerHTML = maxNumber;

function randomNumber() {
    return parseInt(Math.random() * maxNumber + 1);
}

const secretNumber = randomNumber();
