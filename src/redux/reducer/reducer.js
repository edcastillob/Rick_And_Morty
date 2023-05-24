import { ADD_FAV, REMOVE_FAV } from "../actions/types";

const initialState = {
   myFavorites: [],
 };

 
const rootReducer = ( state = initialState, actions ) => {
    switch (actions.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, actions.payload],
            }
         
        
        case REMOVE_FAV:
            const favorites = state.myFavorites.filter( e => e.id !==  Number(actions.payload))
            return {
                ...state,
                myFavorites: favorites
            }
        

        default: 
        return { ...state }
    }
 };

 export default rootReducer;
 