
export const Validation = (userData)=>{
    
    const errors={}

    if(!/\S+@\S+\.\S+/.test(userData.email)){
       errors.email='Ingresa correctamente el email' 
    }
    if (!userData.email) {
        errors.email='debe ingresar un email'
    }
    if (userData.email.length >35) {
        errors.email='El email no debe superar los 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password='La contraseña debe incluir al menos un numero'
    }
    
    if (userData.password.length <6 || userData.password.length >10) {
        errors.password='La longitud de la contraseña es entre (6) y (10) caracteres'
    }



    return errors;
}
