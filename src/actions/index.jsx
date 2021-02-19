import axios from 'axios';
export const SEARCH_MOVIE='SEARCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
}

export const fetchMovies = (text)=> dispatch => {
    const API_KEY = `https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=title`
    axios
        .get(API_KEY)
        .then(response =>
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data.data,

            } )


        )
        .then(result=> console.log(result , API_KEY))
        .catch(err => console.log(err));
};

