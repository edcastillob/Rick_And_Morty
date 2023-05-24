import { useState } from "react";
import style from '../ModuleCss/SearchBar.module.css'


export const SearchBar = ({ onSearch }) =>{  

       const [ id, setId ] = useState('');
       

       const handleChange = ({ target }) => { 
         const { value } = target;
         setId(value);         
        }

        const random = () => {        
         let min = 1;
         let max = 826;            
         let idRandom=Math.floor((Math.random() * (max - min + 1)) + min);          
         onSearch(idRandom);
        }  
        
    return (
       <div >
          <input className={style.searchInput} 
          type='search' 
          placeholder='ID...' 
          name= 'id'
          value = { id }
          onChange= { handleChange }
          />                
        
            <button className={style.button} onClick={() => { onSearch(id); setId("") }}>ADD</button>            
            <button className={style.button} onClick={random} >ADD Random</button> 
            
       </div>
    );
 }
 