const {users} = require('../utils/users.js')
    
const login = (req, res) => {
      
    const { email, password } = req.query;
    if (users.email === email && users.password === password){
        return res.status(200).json({access:true})
    }else{
        return res.status(200).json({access:false})
    }
}

module.exports = login;
    