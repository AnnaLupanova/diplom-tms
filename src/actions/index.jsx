import axios from 'axios';
export const SEARCH_MOVIE='SEARCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SEARCH_MOVIES_BY_TITLE = 'SEARCH_MOVIES_BY_TITLE';
export const SORT_MOVIES = 'SORT_MOVIES';
export const IS_ACTIVE_SEARCH_BY = 'IS_ACTIVE_SEARCH_BY';
export const IS_ACTIVE_SORT_BY = 'IS_ACTIVE_SORT_BY';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export const IS_MODAL = 'IS_MODAL';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}
export const isModal = () => dispatch => {
    dispatch({
        type: IS_MODAL,

    });
}
export const isActiveSearchBy = () => dispatch => {
    dispatch({
        type: IS_ACTIVE_SEARCH_BY,

    });
}
export const isActiveSortBy = () => dispatch => {
    dispatch({
        type: IS_ACTIVE_SORT_BY,

    });
}
export const searchByTitle = searchBy => dispatch => {
    dispatch({
        type: SEARCH_MOVIES_BY_TITLE,
        payload: searchBy,

    });
}
export const sortMovies = (sortBy) => dispatch => {
    dispatch({
        type: SORT_MOVIES,
        payload:sortBy
    });
}

export const fetchMovies = (text,searchBy)=> dispatch => {
    const API_KEY = `https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=${searchBy}`
    axios
        .get(API_KEY)
        .then(response =>
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data.data,

            } )


        )
        .then(result=> {

            console.log(result , API_KEY)
            }
        )
        .catch(err => {

            console.log(err)
        });
};

export const fetchMovie = (id) => dispatch => {
    axios
        .get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data,
            } )
        )
        .then(result=> {
                console.log(result)
            }
        )
        .catch(err => {
            console.log(err)
        });
}

