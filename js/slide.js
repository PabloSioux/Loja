const allSlides = document.querySelectorAll('.slide');
const slidesLength = allSlides.length;
//O SLIDEWIDTH PERDE QUANDO REAJUSTAMOS O TAMANHO DA TELA, ENTÃO QUEBRA, POIS O SLIDE TENTA RECALCULAR UM TAMANHO ANTIGO
const slideWidth = allSlides[0].offsetWidth;

const slides = document.getElementById('slides');
let index = 0;



const next = document.getElementById('next');

const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  switchSlide('next');
});

prev.addEventListener('click', () => {
    switchSlide('prev');
});

function switchSlide(arg){
  slides.classList.add('transition');
  if(arg == 'next') {
    slides.style.left = `${slides.offsetLeft - slideWidth}px`;
    index++;
  } else{
    slides.style.left = `${slides.offsetLeft + slideWidth}px`;
    index--;
  }
}

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

cloneFirstSlide.classList.add('clone-first-slide');
cloneLastSlide.classList.add('clone-last-slide');

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

slides.addEventListener('transitionend', checkIndex);

function checkIndex(){
  slides.classList.remove('transition');
  if (index == -1) {
    slides.style.left = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }
  if(index == slidesLength){
    slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
  }
}
