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


    setTimeout(() => {
        speechDiv.textContent = message.replace(/<[^>]+>/g, '');

    }, 1)
    document.body.appendChild(speechDiv);

    // Opcionalmente, você pode remover o elemento após um tempo, se quiser
    setTimeout(() => {
        document.body.removeChild(speechDiv);
    }, 3000); // Remove após 3 segundos, por exemplo
}

const btnTeste = document.getElementById('btnTeste')

btnTeste.addEventListener("click", (() => {
    speak("testando xdddd")
}))