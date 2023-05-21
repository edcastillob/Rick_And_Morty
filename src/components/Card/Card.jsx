import { Link } from 'react-router-dom';
import style from '../ModuleCss/Card.module.css';

export function Card({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose
        
}) {

return (
        <div className={style.card}>
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