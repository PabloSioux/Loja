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
 
 
 

const allSlides = document.querySelectorAll('.slide');

const slideWidth = allSlides[0].offsetWidth;

const slides = document.getElementById('slides');



const next = document.getElementById('next');

const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  switchSlide('next');
});

prev.addEventListener('click', () => {
    switchSlide('prev');
});

function switchSlide(arg){
  if(arg == 'next') {
    slides.style.left = `${slides.offsetLeft - slideWidth}px`;
  }
  if(arg == 'prev') {
    slides.style.left = `${slides.offsetLeft + slideWidth}px`;
  }
}
