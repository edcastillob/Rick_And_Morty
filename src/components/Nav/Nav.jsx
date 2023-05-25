import { NavLink } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import style from '../ModuleCss/Nav.module.css';




export const Nav = ({ onSearch, setAccess }) => {
 
  const random = () => {        
    let min = 1;
    let max = 826;            
    let idRandom=Math.floor((Math.random() * (max - min + 1)) + min);          
    onSearch(idRandom);
   }  

   const legends = () => {       
        
        window.alert('Detail Buttons: \n 🔍:  Detail Character \n ❤️:  Favorite Character \n 🖤:  Not Favorite Character \n ❌:  Delete Character')
    }

  return (
   
    <div className = { style.nav }>
        <img className = { style.img } src="images/logo@2x.png" alt="Rick & Morty" />        
        <NavLink to="/home">
          <button className={ style.button }>Home</button>
        </NavLink>
        <NavLink to="/favorites">
          <button className={ style.button }>Favorites</button>
        </NavLink>
        <NavLink to="/about">        
        <button className={ style.button }>About</button>
        </NavLink>
        <SearchBar onSearch = { onSearch } /> 
        <button className={style.button} onClick={random} >ADD Random</button>               
        <button title='HELP' className={style.button} onClick={legends} >❔</button>         
        <button className={ style.button } onClick={() =>setAccess(false)}>LogOut</button> 
        <p></p>       

      
    </div>
    
 
  )
}

