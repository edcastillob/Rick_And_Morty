const axios = require('axios');


const URL = 'https://rickandmortyapi.com/api/character/';

const getCharacterById = async(req, res) => { 
	
	try {
		const { id } = req.params;
		const { data } = await axios.get(`${URL}${id}`)
		if(!data.name) throw Error('Error');

		const character = {
			id: data.id, 
			status: data.status, 
			name: data.name, 
			species: data.species, 
			origin: data.origin, 
			image: data.image, 
			gender: data.gender,
		}
		res.status(200).json({character})
		
	} catch (error) {
		if (error.message === 'Error'){
            res.status(404).send(' La propiedad del personaje no existe')
        }else{
            res.status(500).send(error.response.data.error)
        }
	}
 }




 module.exports = { getCharacterById }




// const axios = require('axios');

// 	const getCharacterById = (res, id) => {
// 		axios
// 			.get(`https://rickandmortyapi.com/api/character/${id}`)
// 			.then(response => response.data	)
// 			.then( data => {
// 				const character = {
// 				id: data.id,
// 				name: data.name,
// 				status: data.status,
// 				gender: data.gender,	
// 				image: data.image,
// 				species: data.especies,
// 				origin: data.origin
// 				}
// 			res.writeHead(200, { 'Content-Type': 'application/json' })
// 			res.end(JSON.stringify(character))	
// 			})
// 			.catch(err => 
// 				res.writeHead(500, { 'Content-Type': 'text/plain' })
// 				.res.end(err.message)
// 			)
			
			
// 	}


module.exports = getCharacterById;