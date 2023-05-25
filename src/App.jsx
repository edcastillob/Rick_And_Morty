import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Cards, Nav, About, Detail, NotFound, Login } from './components';
import './App.css';
import Favorites from './components/Favorites/Favorites';




export function App() {
   
   const [characters, setCharacters] = useState([]); 
   const [access, setAccess] = useState(false);

   const EMAIL = 'edwar.castillo@gmail.com';
   const PASSWORD = '1234567';
   
   const location = useLocation();
   const navigate = useNavigate();
  
   
   function onSearch(id) {
   
   if (id > 826) return window.alert('¡this character does not exist!');
   let existe = (characters.filter( (character) => character.id === Number(id)));
   if (existe.length > 0) return (window.alert('¡The character already exists!'));
   
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡this character does not exist!');
      }
   });
  }

  
  function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }else{
      window.alert('Verifique sus credenciales de acceso')
     }
  }


  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line react-hooks/axhaustive-deps
 }, [access])


const onClose = (id) => {
    setCharacters(characters.filter( (character) => character.id !== Number(id)))
}

  return (
    <>
       {
       location.pathname !== '/' && <Nav onSearch = { onSearch } setAccess={setAccess} />
       }       
    
        <Routes>
          <Route  path="*" element={<NotFound />}/>         
          <Route exact path="/" element={<Login login = { login }/> }/>
          <Route exact path="/home" element={<Cards characters={ characters } onClose = { onClose }/> }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/detail/:id" element={<Detail />}/>  
          <Route exact path="/favorites" element={<Favorites/>}/>         
          {/* <Route path="*" element={<Navigate to="/notFound"/>} /> */}
        </Routes>


    </>
  )
}


