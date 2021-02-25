import {SEARCH_MOVIE, FETCH_MOVIES,SEARCH_MOVIES_BY_TITLE,
    SORT_MOVIES,IS_ACTIVE_SEARCH_BY,IS_ACTIVE_SORT_BY,FETCH_MOVIE ,IS_MODAL} from '../actions';



const initialState = {
    text:'',
    movies:[],
    movie:[],
    counter: 0,
    isActiveSearchBy:false,
    isActiveSortBy:false,
    isModalVisible:false,
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
        case IS_MODAL:
            return{
                ...state,
                isModalVisible:true,
            }
        case IS_ACTIVE_SORT_BY:
            return{
                ...state,
                isActiveSortBy:true,
            }
        case SEARCH_MOVIES_BY_TITLE:
            return{
                ...state,
                searchBy:action.payload
            }
        case SORT_MOVIES:

            const sortedMovies = state.movies.map(a => a)

           return {
               sortBy:action.payload,
               movies: sortedMovies.sort((a,b)=> {
                   if (action.payload==='rating'){
                       return b.vote_average - a.vote_average
                   }
                   if (action.payload==='release date'){
                       return (  new Date(b.release_date) - new Date(a.release_date))

                   }

               })
               }

        case FETCH_MOVIES:
            return{
                ...state,
                movies:action.payload,

            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload,

            }
        default:
            return state
    }
}



