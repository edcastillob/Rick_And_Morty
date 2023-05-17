import { useState } from 'react';
import { Cards, Nav  } from './components';
import axios from 'axios';
import './App.css';


export function App() {

  const [characters, setCharacters] = useState([]);  

 function onSearch(id) {
  let existe = (characters.filter( (character) => character.id === Number(id)));
  
 if (existe.length > 0) return (window.alert('¡El personaje con este ID ya fué agregado!'));
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡No hay personajes con este ID!');
     }
  });
}

const onClose = (id) => {
    
    setCharacters(characters.filter( (character) => character.id !== Number(id)))
}

// function onRandom() {
//   let min = 1;
//   let max = 826; 
//   console.log(Math.floor((Math.random() * (max - min + 1)) + min))
//   return Math.floor((Math.random() * (max - min + 1)) + min);
// }

  return (
    <>
      
      <Nav onSearch = { onSearch } />
      <Cards characters={ characters } onClose = { onClose }/>
    </>
  )
}


