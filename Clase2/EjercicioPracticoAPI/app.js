let img = document.getElementById('card-img');
let nombre = document.getElementById('card-name');
let boton = document.getElementById('btn');

// function cambiarUsuario(){
//     const url = 'https://randomuser.me/api/'

//     fetch(url)
//     .then((Response) => Response.json())
//     .then((data) => {
//         console.log(data.results[0],'data');
//         console.log(data.results[0].name.first + ' ' + data.results[0].name.last,'nombre');
//         img.innerHTML = ` <img src = ' ${data.results[0].picture.large}'></img> `;
//         nombre.innerHTML = ` <h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1> `;
//     })
// }

// Es recomendable usar el await ya que este respeto los subprocesos y ademas en proyectos grandes reduce el tiempo de recibir las informacion  //

async function cambiarUsuarioAsyns() {
    const url = 'https://randomuser.me/api/';
    const Response = await fetch(url);
    const data = await Response.json();

    img.innerHTML = ` <img src = ' ${data.results[0].picture.large}'></img> `;
    nombre.innerHTML = ` <h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1> `;
}

boton.addEventListener('click', cambiarUsuarioAsyns);

// boton.addEventListener('click', cambiarUsuario);