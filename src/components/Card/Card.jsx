import { Link } from 'react-router-dom';
import style from '../ModuleCss/Card.module.css';
import { connect } from "react-redux";
import { addFav, removeFav } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';


function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }){

        const [isFav, setIsFav] = useState(false);

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
       {
        isFav ? (
                <button onClick={handleFavorite}>❤️</button>
         ) : (
                <button onClick={handleFavorite}>🖤</button>
         )
        }
        <button onClick={ () => { onClose(id)} }>X</button>,
        <Link to={`/detail/${id}`}>
        <h2>{ id }</h2>
        <h2>{ name }</h2>
        <h2>{ status }</h2>
        <h2>{ species }</h2>
        <h2>{ gender }</h2>
        <h2>{ origin }</h2>           
        <img className = {style.img}  src={ image } alt= { name } />
        </Link>
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