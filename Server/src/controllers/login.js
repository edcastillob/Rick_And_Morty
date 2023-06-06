const users = require('../utils/users.js')
    
const login = (req, res) => {
      
    const { email, password } = req.query;
    let access = false;


    users.find( users => {
        users.email === email && users.password === password
        ? access = true
        : null
     })     
   
    return res.status(200).json({access}) 

   
}

module.exports = {
    login
};
    