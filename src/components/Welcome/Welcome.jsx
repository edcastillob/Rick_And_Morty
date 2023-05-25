import welGif from '../../../public/images/wel.gif';
import style from '../ModuleCss/Welcome.module.css';



export const Welcome = () => {
    
  return (
    <>
    <div className={ style.card }> 
        <img className={style.img} src={welGif} alt="Img Welcome" />
    </div>
    <h2 className={style.text}>Welcome to the Rick and Morty API navigate to use the features</h2>
    
   


    </>
  )
}
