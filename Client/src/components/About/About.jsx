import logo from '../../../public/EC.png';
import GH from '../../../public/images/GH.png';
import style from '../ModuleCss/About.module.css';
import Lin from '../../../public/images/in.png';
import tw from '../../../public/images/twitter.png';
    
    export const About = () => {
      return (
        <>
        <div className={style.container}>          
            
                        
        <div className={style.card}>
        <div className={style.cardChildren}><img className={style.logo} src={logo} alt="Logo EdwarCastillo" /></div>
        <div className={style.cardChildren}>
        <h3>Hola,</h3>
        <p>Soy Edwar Castillo, Desarrollador de este proyecto integrador del bootcamp de Henry, en el mismo encontrarás el uso de varias herramientas y librerías, donde la tecnología en la que mas se enfoca el proyecto es React Js!</p>

        <p>En el área de footer comparto mis redes sociales y github, donde tengo otras aplicaciones alineadas a estas tecnologías por ahora te invito a seguir navengado sobre estas funcionalidades de la API R&M </p>

        </div>
        </div>   

       
        <footer className={style.footer}>
          <div className={style.div}>
            <h2 style={{color:'white'}}>Proyecto Rick & Morty App</h2>
            <h1 style={{color:'yellow'}}>Henry</h1>           
        <a href="https://github.com/edcastillob/" target='blank'>
        <img className={style.logof}  src={GH} alt="Logo Git" /></a> 
        <a href="https://www.linkedin.com/in/edcastillob/" target='blank'>
        <img className={style.logol}  src={Lin} alt="Logo Linkedin" /></a> 
        <a href="https://twitter.com/edwar_castillo" target='blank'>
        <img className={style.logof}  src={tw} alt="Logo Twitter" /></a> 
        </div>
        </footer>
        </div>
       </> 
      )
    }
    