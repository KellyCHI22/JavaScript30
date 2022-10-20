const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio');

window.addEventListener('keydown', (e) => {
    const downKey = e.keyCode;
    keys.forEach(key => {
        if (downKey == key.getAttribute('data-key')) {
            key.classList.toggle('playing');
            setTimeout(() => {
                key.classList.toggle('playing');
            }, 300);
        }
    });
    audios.forEach(audio => {
        if (downKey == audio.getAttribute('data-key')) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});