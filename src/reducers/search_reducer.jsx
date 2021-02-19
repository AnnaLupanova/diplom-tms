import {SEARCH_MOVIE, FETCH_MOVIES,SEARCH_MOVIES_BY_TITLE } from '../actions';



const initialState = {
    text:'',
    movies:[],
    movie:[],
    counter: 0
}

export default function (state=initialState,action){
    switch (action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text:action.payload
            }

        case SEARCH_MOVIES_BY_TITLE:
            return{
                ...state,
                searchBy:action.payload
            }
        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,
                counter: action.payload.length-1,
            }

        default:
            return state
    }
}



