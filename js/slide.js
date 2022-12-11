
//O SLIDEWIDTH PERDE QUANDO REAJUSTAMOS O TAMANHO DA TELA, ENTÃO QUEBRA, POIS O SLIDE TENTA RECALCULAR UM TAMANHO ANTIGO

const slides = document.getElementById('slides');
const allSlides = document.querySelectorAll('.slide');
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;

let canISlide = true;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

cloneFirstSlide.classList.add('clone-first-slide');
cloneLastSlide.classList.add('clone-last-slide');

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);
// aqui quebrou, pois o width de slides não comportou

next.addEventListener('click', () => switchSlide("next"));
prev.addEventListener('click', () => switchSlide("prev"));


//DEDO


slides.addEventListener('transitionend', checkIndex);

slides.addEventListener('mousedown', dragStart);
slides.addEventListener('touchstart', dragStart);
slides.addEventListener('touchmove', dragMove);
slides.addEventListener('touchend', dragEnd);

function dragStart(e){
  e.preventDefault();
  initialPosition = slides.offsetLeft;
  
  if (e.type == 'touchstart') {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
  }
  document.onmouseup = dragEnd;
  document.onmousemove = dragMove;
}

function dragMove(e){
  if (e.type == 'touchmove') {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  slides.style.left = `${slides.offsetLeft - posX2}px`;
}

function dragEnd(){
  /**
   * tree posibilities
   * next slide
   * prev slide
   * stay still
   * 496 ou 200
  **/
  finalPosition = slides.offsetLeft;
  if(finalPosition - initialPosition < -50) {
    switchSlide('next', 'dragging');
  } else if(finalPosition - initialPosition > 50){
    switchSlide('prev', 'dragging');
  } else {
    slides.style.left = `${initialPosition}px`;
  }
  document.onmouseup = null;
  document.onmousemove = null;
}

function switchSlide(arg, arg2){
    slides.classList.add('transition');
    if(canISlide){
      if(!arg2){
        initialPosition = slides.offsetLeft;
      }
      if (arg == 'next') {
        slides.style.left = `${initialPosition - slideWidth}px`;
        index++;
    } else {
        slides.style.left = `${initialPosition + slideWidth}px`;
        index--;
    }
    }
    canISlide = false;
    
}

function checkIndex(){
    slides.classList.remove('transition');
    if(index ==-1){
        slides.style.left = `-${slidesLength * slideWidth}px`;
        index = slidesLength -1;
    }

    if(index == slidesLength){
        slides.style.left = `-${1*slideWidth}px`;
        index = 0;
    }
    canISlide = true;
}
