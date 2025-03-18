// Animación para el contenido
const contentText = document.getElementById('content');

// Función para animar el contenido
function animateWelcome() {
    // Mostrar el contenido después de que termine la animación del "Welcome"
    setTimeout(() => {
        contentText.classList.remove('hidden');
        contentText.classList.add('visible');
    }, 1500); // Retraso adicional
}

// Iniciar la animación cuando la página se cargue
document.addEventListener('DOMContentLoaded', animateWelcome);