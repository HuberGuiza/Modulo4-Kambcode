let divUno = document.getElementById('contenedor1');
let divpersonaje = document.getElementById('personaje');
let boton = document.getElementById('btn2');

boton.addEventListener('click', texto);

function texto() {
    divUno.innerHTML = 'Mi primer texto';
    divUno.style.color = 'green';
    divUno.style.margin = '10px';
}

function personaje(){
    console.log('entro a personajes');
    divpersonaje.innerHTML = 'Juan, 20 años, Estudiante';
    divpersonaje.style.color = 'black';
    divpersonaje.style.background = 'gray';
    divpersonaje.style.margin = '20px';
}