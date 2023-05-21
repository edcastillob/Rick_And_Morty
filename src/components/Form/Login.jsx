import { useState } from "react";
 import {Validation} from '../Validation/Validation';



    
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
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email"
            value={ userData.email }
            onChange = { handleChange }
            />
            <p>{ errors.email ? errors.email : null }</p>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password"
            value={ userData.password }
            onChange = { handleChange }
            />
            <p>{ errors.password ? errors.password : null }</p>
          </div>

            <button>Submit</button>

        </form>
      )
    }
    