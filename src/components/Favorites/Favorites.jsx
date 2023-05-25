import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import  Card   from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions/actions';
import style from '../ModuleCss/Favorites.module.css';

 function Favorites({ myFavorites}) {

     const dispatch = useDispatch(); 
     const [aux, setAux] = useState(false);

    const handleOrder = (e) => { 
        e.preventDefault();
        dispatch(orderCards(e.target.value));
        aux ?  setAux(false) : setAux(true);
        
     }

     const handleFilter = (e) => { 
        e.preventDefault();
        dispatch(filterCards(e.target.value))
      }
  
    return( 
     <>
    <div>
        <select className={style.select} onChange={ handleOrder }>
            <option value="A">-- Orientation --</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select  className={style.select} onChange={ handleFilter }>
            <option value="allCharacters">-- Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
        </select>
    </div>
    <div  className = {style.cards}>

        {
        myFavorites?.map(character => {
          return (  
            <Card 
            key={character.id}
            id= {character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin = {character.origin}
            status ={character.status}
            image={character.image}                            
            />
            )
        })
    }
    </div>
    </>
    )
 }

 const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps, null)(Favorites);