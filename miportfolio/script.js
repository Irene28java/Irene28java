// Selecciona todas las imágenes que son "zoomable"
const images = document.querySelectorAll('.zoomable');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImage = document.createElement('img');
modalImage.classList.add('modal-content');
modal.appendChild(modalImage);

const closeModal = document.createElement('span');
closeModal.classList.add('close');
closeModal.innerHTML = '&times;';
modal.appendChild(closeModal);

// Función para abrir el modal con la imagen seleccionada
images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

// Función para cerrar el modal al hacer clic en "x"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Función para cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
