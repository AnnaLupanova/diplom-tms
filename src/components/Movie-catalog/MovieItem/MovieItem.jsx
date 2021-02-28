import React from 'react';
import './MovieItem.css';
import {Link, withRouter} from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";
import errorImg from '../404.jpg'


class MovieItem extends React.Component {

    render() {
        const {movie} = this.props;

        return (
            <div className='section'>
                <div className='movieItem'>

                    <Link to={'/film/' + movie.id}>
                        <div className='poster'>
                            <ReactImageFallback
                                src={movie.poster_path}
                                fallbackImage={errorImg}
                            />
                        </div>
                    </Link>

                    <div className='movie__info'>
                        <div className='movie__info__text'>
                            <h4>{movie.title}</h4>
                            <p>{movie.genres.join(',')}</p>
                            <p>Rating: {movie.vote_average}</p>
                        </div>
                        <div className='movie__info__year'>
                            <p>{movie.release_date.split('', 4)}</p>
                        </div>

                    </div>

                </div>

            </div>

        )
    }


}


export default withRouter(MovieItem);
