window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const chuteElement = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    showTry(chute);
    verifyValidyTry(chute);
}

function showTry(chute) {
    chuteElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}


