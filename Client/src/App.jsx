import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import  { Cards, Nav, About, Detail, NotFound, Login } from './components';
import './App.css';
import Favorites from './components/Favorites/Favorites';


export function App() {
   
   const [characters, setCharacters] = useState([]); 
   const [access, setAccess] = useState(false);   
   
   const location = useLocation();
   const navigate = useNavigate();  
   
   const onSearch = async(id) => {

   try {
   if (id > 826) return window.alert('¡this character does not exist!');

   let existe = (characters.filter( (character) => character.id === id));
   if (existe.length > 0) return (window.alert('¡The character already exists!')); 

   const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
   
      } catch (error) {
         window.alert('¡this character does not exist!');
      }
   
  }

  

//   async function login(userData) {
//    const { email, password } = userData;
//    const URL = 'http://localhost:3001/rickandmorty/login/';
//    await axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//       const { access } = data;
//       setAccess(data);
//       access && navigate('/home');
//       if(!access) throw Error()
//          access && navigate('/home');
             
//    });
// }

const login = async (userData) => {
   try {
      const { email, password } = userData;      
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;     
      setAccess(access);
      if(!access) throw Error()
      access && navigate('/home');
   } catch (error) {
      alert('Revise sus credenciales de acceso' )
   }
}

  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line react-hooks/axhaustive-deps
 }, [access])


const onClose = (id) => {
    setCharacters(characters.filter( (character) => character.id !== id))
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
      </Routes>


    </>
  )
}


