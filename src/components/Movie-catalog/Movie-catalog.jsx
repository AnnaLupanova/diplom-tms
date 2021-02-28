import React from 'react';
import {connect } from 'react-redux';
import MovieItem from "./MovieItem/MovieItem";
import './MovieItem/MovieItem.css'


class MovieCatalog extends React.Component{


    render() {
        const { movies } = this.props;
        let content = '';

        content =
            movies.length>0
                ? movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} />
                ))
                : <div className='not__found__movie'>No movies found</div>;
        return <div className="container movieCatalog">{content}</div>;



    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})


export default connect(mapStateToProps)(MovieCatalog);


