// Removidos os imports, vamos adaptar o código para funcionar sem eles

// Função de criação de elementos DOM
function create(tag, attributes, ...children) {
    const element = document.createElement(tag);
    
    // Adiciona atributos ao elemento
    if (attributes) {
        for (let key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    // Adiciona filhos ao elemento
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}

// Função para selecionar elementos no DOM, substituindo o que era $1
function $1(selector) {
    return document.querySelector(selector);
}

// Função para criar e adicionar zonas (divs) ao body
function createZone(...args) {
    let el = create(...args);
    document.body.appendChild(el);
    return el;
}

export class ARIASpeechDriver {

    constructor() {
        this.customizable = false;
        this.polite = null;
        this.assertive = $1('#assertive');
        this.alerting = $1('#alert');
        this.lastPoliteTime = 0;
    }

    sayPolite(s) {
        let time = (new Date()).getTime();
        if (!this.polite) {
            this.polite = createZone('div', { 'class': 'visually-hidden', 'aria-live': 'polite' });
        }
        if (this.polite.childNodes.length > 5 && time - this.lastPoliteTime > 1500) {
            this.polite.innerHTML = '';
        }
        let msg = s.replace(/<[^>]+>/g, '').split('<br />').join(' ');
        this.polite.appendChild(create('p', { role: 'text' }, msg + '\u00A0'));
        this.lastPoliteTime = time;
    }

    sayAssertive(s) {
        if (!this.assertive) {
            this.assertive = createZone('div', { id: 'assertive', class: 'visually-hidden', 'aria-live': 'assertive' });
        }
        this.assertive.innerHTML = s.replace(/<[^>]+>/g, '');
    }

    sayAlert(s) {
        if (!this.alerting) {
            this.alerting = createZone('div', { id: 'alert', role: 'alert', class: 'visually-hidden', 'aria-live': 'assertive' });
        }
        this.alerting.innerHTML = s.replace(/<[^>]+>/g, '');
    }

    speak(str, interrupt = false) {
        if (interrupt === 2) {
            this.sayAlert(str);
        } else if (interrupt) {
            this.sayAssertive(str);
        } else {
            this.sayPolite(str);
        }
    }

    cancelSpeech() { }

}
