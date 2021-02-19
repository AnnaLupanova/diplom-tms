import React from 'react';

class MovieItem extends React.Component{
    render(){
        const { movie } = this.props;
        return(
        <div className='section'>
            <div className='movieItem'>
                <div className='poster'>
                    <img src={movie.poster_path} alt={movie.title}/>
                </div>
                    <div className='title'>{movie.title}</div>

            </div>

        </div>

        )
    }
}

export default MovieItem;