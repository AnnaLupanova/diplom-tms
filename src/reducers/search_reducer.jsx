import {SEARCH_MOVIE, FETCH_MOVIES,SEARCH_MOVIES_BY_TITLE,
    SORT_MOVIES,IS_ACTIVE_SEARCH_BY,IS_ACTIVE_SORT_BY,FETCH_MOVIE ,IS_MODAL,LOADING,IS_MODAL_NOT_VISIBLE} from '../actions';



const initialState = {
    text:'',
    movies:[],
    movie:[],
    counter: 0,
    isActiveSearchBy:false,
    isActiveSortBy:false,
    isModalVisible:false,
    loading: false,
}

export default function (state=initialState,action){
    switch (action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text:action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case IS_ACTIVE_SEARCH_BY:
            return{
                ...state,
                isActiveSearchBy:true,
                loading: false
            }

        case IS_ACTIVE_SORT_BY:
            return{
                ...state,
                isActiveSortBy:true,
                loading: false
            }
        case SEARCH_MOVIES_BY_TITLE:
            return{
                ...state,
                searchBy:action.payload,
                loading: false
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
                loading: false

            }
        case FETCH_MOVIE:
            return{
                ...state,
                movie:action.payload,
                loading: false

            }
        default:
            return state
    }
}



