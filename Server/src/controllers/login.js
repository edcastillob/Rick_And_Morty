const { User } = require('../DB_connection')

const login = async(req, res) => { 
    
    try {
        const { email, password} = req.body;
        if(!email || !password ) return res.status(400).send('Faltan datos');

        const user = await User.findOne( { where: {email}})
        if (!user) return res.status(400).send('Usuario no encontrado');

        if (user.password !== password) return res.status(403).send('Password Incorrecto');
        return res.status(200).json({access:true});
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
 }

module.exports = login;