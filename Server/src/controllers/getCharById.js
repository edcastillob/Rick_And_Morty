const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async(req, res) => { 

	try {
		const { id } = req.params;
		const {data} = await axios.get(`${URL}${id}`)	
		const { status, name, species, origin, image, gender } = data;
		const character = { id, status, name, species, origin, image, gender }
			return name 
						? res.status(200).json(character)
						: res.status(404).send('Not found')
		
	} catch (error) {
		return res.status(500).send(error.message)
	}
			 
		
	}


module.exports = { 
	getCharById 
};




