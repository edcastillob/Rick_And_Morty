import logo from '../../../public/EC.png';
import style from '../ModuleCss/About.module.css';
import ecpic from '../../../public/images/ecpic.jpg';
import { Footer } from '../Footer';
import { AboutTitle } from '../Title';

    
    export const About = () => {
      return (
        <>
        <AboutTitle />   
        <div>          
        <img className={style.logo} src={logo} alt="Logo EdwarCastillo" />               
        <div className={style.card}>
        <div className={style.cardChildren}><img className={style.ed} src={ecpic} alt="Dev" />  </div>
        <div className={style.cardChildren}>
        <h3>Hola,</h3>
        <br />
        <p>Soy Edwar Castillo, Ingeniero de Sistemas, desarrollador de este proyecto integrador del bootcamp de Henry, en el mismo encontrarás el uso de varias herramientas y librerías, donde la tecnología en la que mas se enfoca el proyecto es React Js!</p>
        <br />
        <p>En el área de footer comparto mis redes sociales y github, donde tengo otras aplicaciones alineadas a estas tecnologías por ahora te invito a seguir navengado sobre estas funcionalidades de la API R&M </p>

        </div>
        </div>  
        </div>
        <Footer />
       </> 
      )
    }
    