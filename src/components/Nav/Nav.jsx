import { NavLink } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import style from '../ModuleCss/SearchBar.module.css';



export const Nav = ({ onSearch, setAccess }) => {

  return (
    <div className = { style.nav }>

        <SearchBar onSearch = { onSearch } /> 
        <NavLink to="/home">
          <button className={ style.button }>Home</button>
        </NavLink>
        <NavLink to="/about">        
        <button className={ style.button }>About</button>
        </NavLink>
        <button onClick={() =>setAccess(false)}>LogOut</button>
      
    </div>
    
   
  )
}

