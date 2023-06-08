

import GH from '../../../public/images/GH.png';
import style from '../ModuleCss/Footer.module.css';
import Lin from '../../../public/images/in.png';
import tw from '../../../public/images/twitter.png';
        
        export const Footer = () => {
          return (  
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
           
          )
        }
        