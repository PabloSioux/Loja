var html = document.querySelector('html');


// NAVBAR

function menuAlterar(){
  html.classList.toggle('menu-active');
}

function carrinhoAlterar(){
  html.classList.toggle('carrinho-active');

}

function fecharAside() {
  if(html.classList.contains('menu-active')){
    menuAlterar();
  } else {
    carrinhoAlterar();
  }
}




const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
 }
 window.addEventListener('resize', documentHeight);
 documentHeight();
 
 
 //SLIDES:

const allSlides = document.querySelectorAll('.slide');
const slidesLength = allSlides.length;
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
