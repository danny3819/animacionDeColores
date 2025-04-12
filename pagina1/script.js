let $tarjetas = document.querySelector('.contenedor-2');
let $todo = document.querySelector(".body")
let clonado = $tarjetas.cloneNode(true);

!function(){ //funcion auto ejecutable que clona y pone un fondo de pantalla
  let estilo = $todo.appendChild(clonado);
    estilo.style.backgroundImage = 'url("https://wallpapers.com/images/hd/minecraft-cloudy-sunrise-nature-xpc7uzwsfbga70xp.jpg")'
}()
