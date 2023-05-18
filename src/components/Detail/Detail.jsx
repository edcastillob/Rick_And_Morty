import  axios  from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

    
    export const Detail = () => {

      
   

        const [ character, setCharacter ] = useState({});
        const { id }=useParams();
        
        useEffect(() => {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);
   


      return (
        <div>        
        <img src={ character?.image } alt= { character.name } />
       <div>
        <h2>{ character?.name }</h2>
        <h2>{ character?.status }</h2>
        <h2>{ character?.gender }</h2>
        <h2>{ character?.specie }</h2>
        <h2>{ character?.origin?.name }</h2> 
        
        </div>
                  
        </div>
      )
    }
    