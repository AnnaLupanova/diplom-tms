import React from 'react';
import './MovieItem.css';
import {Link} from 'react-router-dom';

class MovieItem extends React.Component{
    render(){
        const { movie } = this.props;
        return(
            <div className='section'>
                <div className='movieItem'>
                   <Link to={`/film/${movie.id}`} >
                       <div className='poster'>
                       <img src={movie.poster_path} alt=''/>

                   </div>

                   </Link>

                    <div className='movieInfo'>
                        <div className='title'>{movie.title}</div>
                        <div className='release-date'>{movie.release_date.split('' ,4)}</div>
                        <div className='genres'><p>{movie.genres.join(',')}</p></div>
                    </div>
                </div>

            </div>

        )
    }
}

export default MovieItem;