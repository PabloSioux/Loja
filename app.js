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


