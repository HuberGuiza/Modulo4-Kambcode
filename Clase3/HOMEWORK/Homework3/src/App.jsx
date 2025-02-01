import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/titulo'
import Imagen from './components/imagen'
import Details from './components/details';

function App() {
  const [ nombre, setNombre ] = useState('');
  const [ apellido, setApellido] = useState('');
  const [ img, setImg ] = useState('');
  const [ genero, setGenero] = useState('');
  const [ estado, setEstado] = useState('');


useEffect(() => {
  async function servicio() {
  const url = 'https://randomuser.me/api/';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);


  setNombre(data.results[0].name.first);
  setApellido(data.results[0].name.last);
  setImg(data.results[0].picture.large);
  setGenero(data.results[0].genre);
  setEstado(data.results[0].state);


}
  
  servicio();
}, [])


  return (
  <div>
    
    <Titulo nombre= {nombre} 
            apellido={apellido}
             />

    <Imagen url={img} />
    <Details genre={genero} 
              status={estado}/>
  </div>  

  

  )
}

export default App
