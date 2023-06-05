const {users} = require('../utils/users.js')
    
const login = (req, res) => {
      
    const { email, password } = req.query;

      const userLogin = users.find( users => users.email === email && users.password === password)
    
      if(userLogin) {
          return res.status(200).json({access:true})
      }

      return res.status(404).json({access:false}) 

   
}

module.exports = {
    login
};
    