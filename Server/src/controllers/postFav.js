const { Favorite } = require('../DB_connection');

const postFav = async(req, res) => { 

    try {
        const { name, status, image, specie, gender, origin } = req.body;
        if( !name || !status || !image || !specie || !gender || !origin ) return res.status(401).send('Faltan datos');
    
        await Favorite.findOrCreate({ where: { id, name, status, image, specie, gender, origin }})
    
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites)
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = postFav;