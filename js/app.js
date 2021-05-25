//GALERIA
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true
  })

// BOTON SCROLL TOP
var  btnTop = document.getElementById("btn-top");


// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function (){
     var  scroll = document.documentElement.scrollTop,
          fullSize = document.documentElement.offsetHeight,
          sizeVP = document.documentElement.clientHeight;


     if (scroll > 100) {
          btnTop.classList.add("show");
     }else{
          btnTop.classList.remove("show");
     }

     // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
     if (fullSize == (scroll + sizeVP)) {
         btnTop.classList.add("scrollFinal"); 
     }else{
          btnTop.classList.remove("scrollFinal");
     }
});


// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
     window.scrollTo(0,0);
});