import { Card }  from '../Card/Card';
import style from '../ModuleCss/Cards.module.css';



export  function Cards({ characters, onClose }) {
  
   return( 
    
   <div className = {style.cards}>
      {
         characters.map((characters, index) => {
            return (
               <Card 
               key =     { index }// es un identificador para react 
               id =      { characters.id }//es un identificador para el programador
               name =    { characters.name } 
               image   = { characters.image }
               status =  { characters.status } 
               gender  = { characters.gender }
               species = { characters.species }
               onClose = { onClose }
               origin  = { characters.origin.name} 
           />               
            )
         })
      }
   </div>
   )
}


