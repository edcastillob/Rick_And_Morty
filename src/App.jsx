import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Cards, Nav, About, Detail, NotFound   } from './components';
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


  return (
    <>
      
      <Nav onSearch = { onSearch } />
      

        <Routes>
          <Route exact path="/home" element={<Cards characters={ characters } onClose = { onClose }/> }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/detail/:id" element={<Detail />}/>        
         
          <Route path="*" element={<NotFound />} />
        </Routes>


    </>
  )
}


