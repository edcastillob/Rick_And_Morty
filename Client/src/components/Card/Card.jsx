import { NavLink, useLocation } from 'react-router-dom';
import style from '../ModuleCss/Card.module.css';
import { connect } from "react-redux";
import { addFav, removeFav } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';



function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }){

        const [isFav, setIsFav] = useState(false);
        const location = useLocation();

        useEffect(() => {
                myFavorites?.forEach((fav) => {
                   if (fav.id === id) {
                      setIsFav(true);
                   }
                });
             }, [myFavorites]);

        const handleFavorite = () => { 
                if (isFav) {
                        setIsFav(false)
                        removeFav(id)
                }else{
                        setIsFav(true)
                        addFav({ id, name, status, species, gender, origin, image })
                }
         }



return (
        <div className={style.card}>
         {/* <h2 >{ species }</h2> */}
        
        <NavLink title='Detail' to={`/detail/${id}`}>🔍</NavLink>
       {
        isFav ? (
                <button title='Delete Favorite' onClick={handleFavorite}>❤️</button>
         ) : (
                <button title='ADD Favorite' onClick={handleFavorite}>🖤</button>
         )
        }
        {
       location.pathname !== '/favorites' && <button title='Delete' onClick={ () => { onClose(id)} }>❌</button>
       }  
        {/*  <h2>{ id }</h2> 
       <h2>{ status }</h2>
        <h2>{ gender }</h2>
        <h2>{ origin }</h2>  */}         
        <img className = {style.img}  src={ image } alt= { name } />
        <h2 className={style.card_title}>{ name }</h2>
        </div>
    );  
}

export function mapStateToProps(state) {
        return {
           myFavorites:state.myFavorites
           
        }
     }
     
     export function mapDispatchToProps(dispatch) {
        return {
                addFav: character => dispatch(addFav(character)),
                removeFav: id => dispatch(removeFav(id))
        }
     }
     
     export default connect(mapStateToProps, mapDispatchToProps)(Card);