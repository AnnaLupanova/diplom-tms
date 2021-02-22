import React from 'react';
import './MovieItem.css';

class MovieItem extends React.Component{
    render(){
        const { movie } = this.props;
        return(
            <div className='section'>
                <div className='movieItem'>
                    <div className='poster'>
                        <img src={movie.poster_path} alt=''/>
                    </div>
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