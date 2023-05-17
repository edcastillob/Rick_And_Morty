import { SearchBar } from '../SearchBar';
import style from './Nav.module.css';



export const Nav = ({ onSearch }) => {

  return (
    <div className = { style.nav }>
      <SearchBar onSearch = { onSearch } />  
      
    </div>
    
   
  )
}

