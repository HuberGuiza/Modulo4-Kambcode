import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import CharacterCard from './components/CharacterCard';

function App() {

  const [ nombre, setNombre ] = useState('');
  const [ img, setImg ] = useState('');
  const [ genero, setGenero] = useState('');
  const [ estado, setEstado] = useState('');

  const rickAndMortyCharacterId = 1;

  useEffect(() => {
    

    const url = "https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data <--');

      
      setNombre(data.name);
      setImg(data.image);
      setGenero(data.gender);
      setEstado(data.status);

    })


    
  }
  
, [])

  return (
  <div>
    
    <CharacterCard
    
    nombre={nombre}
    imagen={img}
    genero={genero}
    estado={estado}
    
    />

  </div>

  )
}

export default App
