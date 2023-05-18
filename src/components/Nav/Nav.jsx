import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import style from '../ModuleCss/SearchBar.module.css';



export const Nav = ({ onSearch }) => {

  return (
    <div className = { style.nav }>

        <SearchBar onSearch = { onSearch } /> 
        <Link to="/about">        
        <button className={ style.button }>About</button>
        </Link>
        <Link to="/home">
          <button className={ style.button }>Home</button>
        </Link>
      
    </div>
    
   
  )
}

