var menu = document.querySelector('.menu');
var body = document.querySelector('body');
var html = document.querySelector('html');
var eclipse = document.querySelector('.eclipse');



function menuAlterar(){
  menu.classList.toggle('menu--active');
    
  eclipse.classList.toggle('eclipse--active');
  html.classList.toggle('menu-active');
  
}

