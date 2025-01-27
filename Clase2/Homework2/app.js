let img = document.getElementById('card-img');
let nombre = document.getElementById('card-name');
let boton = document.getElementById('btn');
let celular = document.getElementById('card-cell');
let email = document.getElementById('card-email');
let genero = document.getElementById('card-gender');

async function cambiarUsuarioAsync() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();

    nombre.innerHTML = ` <h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1> `;
    img.innerHTML = ` <img src='${data.results[0].picture.large}'></img> `;
    celular.innerHTML = ` <h2> ${data.results[0].cell} </h2> `;
    email.innerHTML = ` <h2> ${data.results[0].email} </h2> `;
    genero.innerHTML = ` <h2> ${data.results[0].gender} </h2> `;
    
}

boton.addEventListener('click', cambiarUsuarioAsync);