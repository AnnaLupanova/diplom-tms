import {SEARCH_MOVIE, FETCH_MOVIES,SEARCH_MOVIES_BY_TITLE,SORT_MOVIES,IS_ACTIVE_SEARCH_BY,IS_ACTIVE_SORT_BY } from '../actions';



const initialState = {
    text:'',
    movies:[],
    movie:[],
    counter: 0,
    isActiveSearchBy:false,
    isActiveSortBy:false,
}

export default function (state=initialState,action){
    switch (action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text:action.payload
            }
        case IS_ACTIVE_SEARCH_BY:
            return{
                ...state,
                isActiveSearchBy:true,
            }
        case IS_ACTIVE_SORT_BY:
            return{
                ...state,
                isActiveSortBy:true,
            }
        case SEARCH_MOVIES_BY_TITLE:
            return{
                ...state,
                searchBy:action.payload,
            }
        case SORT_MOVIES:

            const sortedMovies = state.movies.map(a => a)

           return {
                ...state,


            }

        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,

            }

        default:
            return state
    }
}



