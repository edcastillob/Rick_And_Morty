import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../ModuleCss/Detail.module.css';
import  axios  from 'axios';
// import { Footer } from '../Footer';

    
    export const Detail = () => {   

      const { id }=useParams();
      const [ character, setCharacter ] = useState({});
        
        useEffect(() => {
            // axios(`https://rickandmortyapi.com/api/character/${id}`)
            axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);
   


      return (
         <>
            <br />
            <div className={style.container}> 
            <hr />
            <h2 className={ style.card_info }>Name: { character.name }</h2> 
            <h2 className={ style.card_info }>ID: { character.id }</h2> 
            <br />
                     
            <div className={ style.card}>          
            <img className = {style.img} src={ character.image } alt= { character.name } />  
            </div>    
            <div className={ style.cards }> 
             
            <h2 className={ style.card_info }>Status: { character.status }</h2>
            <h2 className={ style.card_info }>Gender: { character.gender }</h2>
            <h2 className={ style.card_info }>Specie: { character.species }</h2>
            <h2 className={ style.card_info }>Origin: { character.origin?.name }</h2>         
           
            </div>       
            </div>
            
        

        </>
      )
    }
    