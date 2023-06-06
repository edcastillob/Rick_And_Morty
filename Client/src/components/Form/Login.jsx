import { useState } from "react";
 import {Validation} from '../Validation/Validation';
 import style from '../ModuleCss/Login.module.css';
 


    
    export const Login = ({login}) => {
      const [userData, setUserData] = useState({
        email: '',
        password: '',
      });

      const [errors, setErrors] = useState({
        email: '',
        password: '',
      });
      
      const handleChange = e => { 
       
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
        
        setErrors(
          Validation({
            ...errors,
            [e.target.name]: e.target.value
          })
          )   
        }
        

       const handleSubmit = e => { 
            e.preventDefault();
            login(userData)            
        }

       
      return (
        <form  className={ style.form } onSubmit={handleSubmit}>
      
          <h1 className={style.formTitle}>Login</h1>
          <h4 className={style.formAccess}>Ingresa con edwar.castillo@gmail.com pass: 1234567</h4>
          <div className={style.formContainer }>
            
            <label className={style.textLabel} htmlFor="email">Email:</label>
            <input 
            className={ style.formInput}
            type="email" 
            name="email"
            value={ userData.email }
            onChange = { handleChange }
            />            
            <p>{ errors.email ? errors.email : null }</p>
          
        
            <label className={style.textLabel} htmlFor="password">Password:</label>
            <input 
            className={ style.formInput}
            type="password" 
            name="password"
            value={ userData.password }
            onChange = { handleChange }
            />
            <p>{ errors.password ? errors.password : null }</p>
            

            <button className={style.button}>Submit</button>    

          </div>         
        </form>
      )
    }
    