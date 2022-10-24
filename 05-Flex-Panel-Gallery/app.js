const panels = document.querySelectorAll('.panel');

function addOpen(panel) {
    panel.classList.add('open');
    setTimeout(() => {
        panel.classList.add('open-text');
    }, 500);
}

function removeOpen(panel) {
    panel.classList.remove('open');
    setTimeout(() => {
        panel.classList.remove('open-text');
    }, 500);
}

panels.forEach(panel => panel.addEventListener('click', function () {
    if (panel.classList.contains('open')) {
        removeOpen(panel);
        panels.forEach(panel => {
            panel.classList.remove('blackBG');
        });
    } else {
        panels.forEach(panel => {
            panel.classList.add('blackBG');
            removeOpen(panel);
        });
        addOpen(panel);
        panel.classList.remove('blackBG');
    }

}));