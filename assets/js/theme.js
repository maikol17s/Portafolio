// theme-language.js
document.addEventListener('DOMContentLoaded', () => {
    // Configuración del tema
    const themeToggle = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = () => {
        document.body.className = ''; // Resetear clases
        if (currentTheme === 'amber') {
            document.body.classList.add('amber-theme');
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }
    }

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'amber' ? 'light' : 'amber';
        localStorage.setItem('theme', currentTheme);
        applyTheme();
    });

    // Inicializar
    applyTheme();
});