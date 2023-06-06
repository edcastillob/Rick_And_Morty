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
                myFavorites: actions.payload,
                allCharacters: actions.payload
            }
         
        
        case REMOVE_FAV:            
        
            return {
                ...state,
                myFavorites: actions.payload
            }

        case FILTER:
            //const filterCharacter = state.allCharacters.filter(e => e.gender === actions.payload);
            // return {
            //     ...state,
            //     myFavorites: 
            //     actions.payload !== 'allCharacters' 
            //     ? filterCharacter
            //     : [...state.allCharacters]
            if(actions.payload === 'allCharacters') return{
                ...state,
                 myFavorites: state.allCharacters
                // myFavorites: state.myFavorites
            }
            let allCharCopy = [...state.allCharacters];
            let filteredCharacters = allCharCopy.filter(character => character.gender === actions.payload)
            return {
                ...state,
                myFavorites: filteredCharacters
            }
            
        
        case ORDER:          
        const favoritesCopy = [...state.myFavorites]
            return {
                ...state,
                myFavorites:
                    actions.payload === 'A'
                    ? favoritesCopy.sort((a, b) => a.id - b.id)
                    : favoritesCopy.sort((a, b) => b.id - a.id)

            }

        default: 
        return { ...state }
    }
 };

 export default rootReducer;
 