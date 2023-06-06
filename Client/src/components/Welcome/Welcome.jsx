import welGif from '../../../public/images/wel.gif';
import ec from '../../../public/ec.png';
import henry from '../../../public/images/henry.png';
import style from '../ModuleCss/Welcome.module.css';




export const Welcome = () => {
    
  return (
    <>
    <div className={ style.card }> 
        <img className={style.img} src={welGif} alt="Img Welcome" />
    </div>
    <h2 className={style.text}>Welcome to the Rick and Morty API navigate to use the features</h2>


    <footer className={ style.footer }>
        <img className={style.logoEdwar} src={ec} alt="Logo Edwar Castillo" />
    <div className={ style.footerContainer}>
        <p>© Ing. Edwar Castillo - Proyecto Integrador Henry.</p>
    </div>
        <img className={style.logoHenry} src={henry} alt="Logo Henry" />
</footer>
    </>
  )
}
