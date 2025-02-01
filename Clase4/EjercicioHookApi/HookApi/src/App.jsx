import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[firtsName, setFirstName] = useState('');
  const[last, setLast] = useState('');
  const[image, setImage] = useState('');
  const[email, setEmail] = useState('');
  
  useEffect(() => {
    const url = 'https://randomuser.me/api/';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0],'data <--');
      setFirstName(data.results[0].name.first);
      setLast(data.results[0].name.last);
      setImage(data.results[0].picture.large);
      setEmail(data.results[0].email);

    })
  },[]
  )

  return (
    <div>
      <h1>Personaje</h1>
      <div className ='card' >
        <img src={image} alt='imagen'/> 
      </div>
      <h2>{firtsName} {last}</h2>
      <h2>{email}</h2>
    </div>
  )
}

export default App
