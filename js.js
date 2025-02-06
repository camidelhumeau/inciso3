/** 
Autor: Ana Camila Nambo Delhumeau 
Programa: index.html 
Fecha: 05/02/2025 
Lenguaje: html 
**/
let index = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.querySelectorAll('img').length;
function nextImage() {
  index = (index + 1) % totalImages;
  updateCarousel();
}

function prevImage() {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  images.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextImage, 30000);

document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});
