import React from 'react';
import './MovieItem.css';
import {Link,withRouter} from 'react-router-dom';


class MovieItem extends React.Component {


    render() {


        const {movie} = this.props;
        return (
            <div className='section'>
                <div className='movieItem'>

                    <Link to={'/film/' + movie.id } >
                        <div className='poster' >
                            <img src={movie.poster_path} alt=''/>
                        </div>
                    </Link>

                    <div className='movie__info'>
                        <div className='movie__info__text'>
                            <h4>{movie.title}</h4>
                            <p>{movie.genres.join(',')}</p>
                        </div>
                        <div className='movie__info__year'>
                            <p>{movie.release_date.split('',4)}</p>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}




export default withRouter(MovieItem);
