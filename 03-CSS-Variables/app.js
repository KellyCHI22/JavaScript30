const root = document.documentElement;

const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
const blendMode = document.getElementById("blend-mode");

spacing.addEventListener('change', () => {
    root.style.setProperty('--spacing', `${spacing.value}px`);
});

blur.addEventListener('change', () => {
    root.style.setProperty('--blur', `${blur.value}px`);
});

base.addEventListener('change', () => {
    root.style.setProperty('--base', base.value);
});

blendMode.addEventListener('change', () => {
    root.style.setProperty('--blend-mode', blendMode.value);
})

