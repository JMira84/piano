const numberOfWhiteKeys = 13;

function renderWhiteKeys () {
    const pianoWrapper = document.querySelector('.piano-wrapper');
    for (let i = 0; i < numberOfWhiteKeys; i++) {
        const createdKeyWrappers = pianoWrapper.appendChild(document.createElement('div'));
        const whiteKey = createdKeyWrappers.appendChild(document.createElement('div'));
        
        createdKeyWrappers.classList.add('keys-wrapper');
        whiteKey.classList.add('white-key', 'white-key' + [i]);
        whiteKey.setAttribute('id', 'key-' + [i + 1]);

        whiteKey.addEventListener('click', e => playSounds(e));
    }
}

function renderBlackKeys () {
    const keyWrappers = document.querySelectorAll('.keys-wrapper');
    for (let i = 0; i < keyWrappers.length; i++) {
        if (i === 2 || i === 6 || i === 9 || i === 13) {
            continue;
        }
        const blackKey = keyWrappers[i].appendChild(document.createElement('div'));

        blackKey.classList.add('black-key', 'black-key' + [i]);
        if (i >= 0 && i <= 1) {
            blackKey.setAttribute('id', 'key-' + [i + 14]);
        } else if (i >= 3 && i <= 5) {
            blackKey.setAttribute('id', 'key-' + [i + 14 - 1]);
        } else if (i >= 7 && i <= 8) {
            blackKey.setAttribute('id', 'key-' + [i + 14 - 2]);
        } else {
            blackKey.setAttribute('id', 'key-' + [i + 14 - 3]);
        }

        blackKey.addEventListener('click', e => playSounds(e));
    }
}

function playSounds (e) {
    const audio = new Audio();
    const src = `./assets/sounds/${e.target.id}.mp3`;
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
    return audio;
}

window.onload = function() {
    renderWhiteKeys();
    renderBlackKeys();
}