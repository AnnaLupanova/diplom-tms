import {SEARCH_MOVIE, FETCH_MOVIES,SEARCH_MOVIES_BY_TITLE,SORT_MOVIES } from '../actions';



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
        case SORT_MOVIES:
            const sortedMovies = state.movies.map(a => a)
           return {
               movies: sortedMovies.sort((a,b)=>(b.vote_count-a.vote_count))
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



