const capa_slides = document.getElementById('capa_slides');
const capa_allSlides = document.querySelectorAll('.capa_slide');
const capa_slideWidth = capa_allSlides[0].offsetWidth;
const capa_slideLength = capa_allSlides.length;

let capa_initialPosition;
let capa_finalPosition;
let capa_index = 1;
let capa_posX1; 
let capa_posX2; 
let capa_canISlide = true;


capa_slides.addEventListener('transitionend', capa_checkIndex);

const capa_firstSlide = capa_allSlides[0];
const capa_lastSlide = capa_allSlides[capa_allSlides.length - 1];

const capa_cloneFirstSlide = capa_firstSlide.cloneNode(true);
const capa_cloneLastSlide = capa_lastSlide.cloneNode(true);

capa_slides.appendChild(capa_cloneFirstSlide);
capa_slides.insertBefore(capa_cloneLastSlide, capa_firstSlide)

capa_slides.addEventListener('touchstart', capa_dragStart);
capa_slides.addEventListener('touchmove', capa_dragMove);
capa_slides.addEventListener('touchend', capa_dragEnd);

function capa_dragStart(e){
    // e.preventDefault();
    if(capa_canISlide){
        capa_initialPosition = capa_slides.offsetLeft;
        capa_posX1 = e.touches[0].clientX;    
    }
}

function capa_dragMove(e){
    if (capa_canISlide) {

        capa_posX2 = capa_posX1 - e.touches[0].clientX;
        capa_posX1 =  e.touches[0].clientX;

        capa_slides.style.left = `${
            capa_slides.offsetLeft - capa_posX2
        }px`;
    }

}

function capa_dragEnd(e){
    if (capa_canISlide) {
        capa_finalPosition = capa_slides.offsetLeft;

        if(capa_finalPosition - capa_initialPosition < -100){
            capa_switchSlide('next', 'draging');
        } else if(capa_finalPosition - capa_initialPosition > 100){
            capa_switchSlide('prev', 'draging');
        } else {
            capa_slides.style.left = capa_initialPosition + 'px';
        }
    
    }

}

function capa_switchSlide(capa_arg, capa_arg2){
    if(capa_canISlide){
        capa_slides.classList.add('capa_transition');
        if(!capa_arg2){
            capa_initialPosition = capa_slides.offsetLeft;
        }
        if(capa_arg == 'prev'){
            capa_slides.style.left = `${
                capa_initialPosition + capa_slideWidth
            }px`;
            capa_index--;
            capa_dotMove(capa_index, 'not');
        } else {
            capa_slides.style.left = `${
                capa_initialPosition - capa_slideWidth
            }px`;
            capa_index++;
            capa_dotMove(capa_index, 'not');
        }
    }
    capa_canISlide = false;
}


function capa_checkIndex(){
    capa_slides.classList.remove('capa_transition');
    if(capa_index == 0){
        capa_slides.style.left = `-${
            capa_slideLength * capa_slideWidth
        }px`;
        capa_index = capa_slideLength; 
        capa_dotMove(capa_index, 'not');
    } else if(capa_index == capa_slideLength + 1){
        capa_slides.style.left = `-${
            1 * capa_slideWidth
        }px`;
        capa_index = 1; 
        capa_dotMove(capa_index, 'not');
    }
    capa_canISlide = true;

}


let capa_dots = document.querySelectorAll('.capa_dot');

function capa_dotMove(capa_n, capa_arg2){
    // console.log('aqui rodou!');
    if(capa_canISlide){
        let capa_i;
        
        if(capa_n > capa_slideLength){
            capa_n = 1;
        }
        
        if(capa_n < 1){
            capa_n = capa_slideLength;
        }
        
        for(capa_i = 0; capa_i < capa_dots.length ; capa_i++){
            capa_dots[capa_i].classList.remove('capa_active');
        }
        
        capa_dots[capa_n - 1].classList.add('capa_active');
        if(!capa_arg2){
            capa_slides.classList.add('capa_transition');
            capa_slides.style.left = `-${
                capa_n * capa_slideWidth
            }px`;
            capa_index = capa_n;
        }
        capa_canISlide = false;
    }
    
}


// CONCENTARDO O SCROLL DA PÁGINA
capa_slides.addEventListener('touchstart', capa_scrollStart);
capa_slides.addEventListener('touchmove', capa_scrollMove);

let capa_posY1;
let capa_posY2;

function capa_scrollStart(e){
    capa_posY1 = e.touches[0].clientY;
}

function capa_scrollMove(e){ 
    capa_posY2 = capa_posY1 - e.touches[0].clientY;
    capa_posY1 =  e.touches[0].clientY;
    window.scrollBy(0, capa_posY2);

}