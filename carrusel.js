let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    // Oculta la imagen actual gradualmente
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.opacity = '0'; 

    // Establece un temporizador para mostrar la nueva imagen después del desvanecimiento
    setTimeout(() => {
        slides[currentSlide].style.display = 'none'; // Ocultar la imagen actual
        currentSlide = index; // Actualizar el índice de la imagen actual
        slides[currentSlide].style.display = 'block'; // Mostrar la nueva imagen
        slides[currentSlide].style.opacity = '1'; // Hacer que la nueva imagen aparezca gradualmente
        slides[currentSlide].classList.add('active'); // Activar la clase para la transición
    }, 500); // Tiempo en ms que toma la transición de opacidad en CSS
}

function changeSlide(direction) {
    // Determinar el índice de la nueva imagen
    let newSlide = currentSlide + direction;

    // Asegurarse de que el índice no se salga de los límites del arreglo
    if (newSlide >= slides.length) {
        newSlide = 0;
    }
    
    if (newSlide < 0) {
        newSlide = slides.length - 1;
    }
    
    showSlide(newSlide); // Mostrar la nueva imagen con transición
}

// Cambio automático de imagen cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// Mostrar la primera imagen
showSlide(currentSlide);
