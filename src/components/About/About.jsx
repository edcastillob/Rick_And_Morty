import logo from '../../../public/EC.png';
import GH from '../../../public/images/GH.png';
import style from '../ModuleCss/About.module.css';
import Lin from '../../../public/images/in.png';
import tw from '../../../public/images/twitter.png';
    
    export const About = () => {
      return (
        <>
        <div className={style.container}>
            <h2>About</h2>
            
            <img className={style.logo} src={logo} alt="Logo EdwarCastillo" />            
            <h1>Edwar Y. Castillo B.</h1>
            <h2>Ingeniero de Sistemas</h2>
            <br /><br /><br /><br />
            <h2 style={{color:'white'}}>Proyecto Rick & Morty App</h2>
            <h1 style={{color:'yellow'}}>M2 Henry</h1>           
        <footer className={style.footer}>
        <a href="https://github.com/edcastillob/" target='blank'>
        <img className={style.logof}  src={GH} alt="Logo Git" /></a> 
        <a href="https://www.linkedin.com/in/edcastillob/" target='blank'>
        <img className={style.logof}  src={Lin} alt="Logo Linkedin" /></a> 
        <a href="https://twitter.com/edwar_castillo" target='blank'>
        <img className={style.logof}  src={tw} alt="Logo Twitter" /></a> 
        </footer>
        </div>
       </> 
      )
    }
    