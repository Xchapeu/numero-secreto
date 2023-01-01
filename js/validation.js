function verifyValidyTry(chute) {
    const num = +chute;
    const chuteElement = document.getElementById('chute');

    if (dataFormatInvalid(num)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                    <h1>Game Over!!!</h1>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="playAgain" class="playAgain" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            chuteElement.innerHTML += '<div>O valor precisa ser um número</div>';
        }
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
    } else if(majorValue(num)) {
        chuteElement.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else if(minorValue(num)) {
        chuteElement.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
    }
}

document.body.addEventListener('click', event => {
    if(event.target.id == 'playAgain') {
        window.location.reload();
    }
})

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
