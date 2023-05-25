import { NavLink } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import style from '../ModuleCss/Nav.module.css';




export const Nav = ({ onSearch, setAccess }) => {

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
        <button className={ style.button } onClick={() =>setAccess(false)}>LogOut</button> 
        <p></p>       

      
    </div>
    
 
  )
}

