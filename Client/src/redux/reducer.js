import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: payload, 
                allCharacters: payload };
                
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload 
            };
            
        case FILTER:
            if (payload === "All") {
                return{
                    ...state,
                    myFavorites: state.allCharacters
                }
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter((character) => character.gender === payload)
                }
            }
        case ORDER:
            if (payload === "A") {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a, b) => (a.id - b.id))
                }
            } else {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a, b) => (b.id - a.id))
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;