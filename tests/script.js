const dvSpeak = document.getElementById("screenSpeak")

function speak(message, interrupt = false) {
    let speechDiv = document.createElement('div');

    speechDiv.className = 'visually-hidden';


    if (interrupt === 2) {
        speechDiv.setAttribute('role', 'alert');
    } else if (interrupt) {
        speechDiv.setAttribute('aria-live', 'assertive');
        speechDiv.setAttribute('role', 'text')
    } else {
        speechDiv.setAttribute('aria-live', 'polite');
        speechDiv.setAttribute('role', 'text')
    }


        speechDiv.textContent = message.replace(/<[^>]+>/g, '');
    dvSpeak.appendChild(speechDiv);

    setTimeout(() => {
        speechDiv.remove()
    }, 3000); // Remove após 3 segundos, por exemplo
}

const btnTeste = document.getElementById('btnTeste')

btnTeste.addEventListener("click", (() => {
    speak("que droga velho")
}))