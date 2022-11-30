var menu = document.querySelector('.menu');
var bars = document.querySelector('.navbar_bars');



var body = document.querySelector('body');

bars.onclick = () => {
    menu.classList.add('menu--active');
    // docu.style.display = 'block';
    body.classList.add('eclipse');
}