function verifyValidyTry(chute) {
    const num = +chute;
    const chuteElement = document.getElementById('chute');

    if(dataFormatInvalid(num)) {
        chuteElement.innerHTML += '<div>O valor precisa ser um número</div>';
        return;
    }
    
    if(numberOutOfBoundaries(num)) {
        chuteElement.innerHTML += `<div>Número fora do range. O número precisa estar entre ${minNumber} e ${maxNumber}</div>`;
        return;
    }

    if(num === secretNumber) {
        document.body.innerHTML = `
            <h1>Parabéns!!!!</h1>
            <h3>Você acertou o número secreto: ${secretNumber}.</h3>
            <button id="playAgain" class="playAgain">Jogar novamente</button>
        `;  
        const playAgain = document.getElementById('playAgain');
        playAgain.addEventListener('click', () => location.reload());
    } else if(majorValue(num)) {
        chuteElement.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else if(minorValue(num)) {
        chuteElement.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

function dataFormatInvalid(num) {
    return Number.isNaN(num);
}

function numberOutOfBoundaries(num) {
    return num > maxNumber || num < minNumber;
}

function minorValue(num) {
    return num < secretNumber;
}

function majorValue(num) {
    return num > secretNumber;
}
