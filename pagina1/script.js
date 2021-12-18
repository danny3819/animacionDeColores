let $tarjetas = document.querySelector('.contenedor-2');
let $todo = document.querySelector(".body")
let clonado = $tarjetas.cloneNode(true);
!function(){
  let estilo = $todo.appendChild(clonado);
    estilo.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")'
}()
