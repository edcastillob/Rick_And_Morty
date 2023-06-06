import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from 'axios';



// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character
//   }
// }

export const addFav =  (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/';
  try {
     return async (dispatch) => {
        const { data } = await axios.post(endpoint, character)
        if (!data.length) throw Error('No hay favoritos')
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     }
  } catch (error) {
     console.log(error.message);
  }
}

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  try {
     return async(dispatch) => {
        const { data } = await axios.delete(endpoint)
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
           id:id
        });
     }
  } catch (error) {
     console.log(error.message);
  }
}


  export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender
    }
  }

  export const orderCards = (order) => {
    return {
      type: ORDER,
      payload: order
    }
  }