import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types";

const initialState = {
   myFavorites: [],
   allCharacters: [],
 };

 
const rootReducer = ( state = initialState, actions ) => {
    switch (actions.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, actions.payload],
                allCharacters: [...state.allCharacters, actions.payload],
            }
         
        
        case REMOVE_FAV:
            const favorites = state.myFavorites.filter( e => e.id !==  Number(actions.payload));
            return {
                ...state,
                myFavorites: favorites
            }

        case FILTER:
            const filterCharacter = state.allCharacters.filter(e => e.gender === actions.payload);
            return {
                ...state,
                myFavorites: 
                actions.payload !== 'allCharacters' 
                ? filterCharacter
                : [...state.allCharacters]
            }
        
        case ORDER:
            const allCharacterCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites:
                    actions.payload === 'A'
                    ? allCharacterCopy.sort((a, b) => a.id - b.id)
                    : allCharacterCopy.sort((a, b) => b.id - a.id)

            }

        default: 
        return { ...state }
    }
 };

 export default rootReducer;
 