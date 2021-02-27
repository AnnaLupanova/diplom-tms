import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie,setLoading} from '../../../actions/index';
import {Link, withRouter} from 'react-router-dom';
import './MovieDetails.css'
import onClickOutside from 'react-onclickoutside';
import Spinner from '../../Landing/Spinner';


export class MovieDetails extends React.Component{

        modal = React.createRef
    componentDidMount = () => {

        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();

    }

     handleClickOutside = () => {
             this.props.history.push('/')
             }


    render() {
        const { loading, movie } = this.props;

        let info = (

            <React.Fragment>
                <div className='modal__wrapper' onClick={this.handleClickOutside}>

                </div>
                <div className='modal' style={{ background: `linear-gradient(rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)),url(${movie.poster_path}), center/cover` }} ref={this.modal} >
                    <h1 className='movie__title'>{movie.title}</h1>
                    <p className='movie__genre'>{movie.genres}</p>
                    <p className='movie__description'>{movie.overview}</p>
                    <p className='movie__budget'>Budget: ${movie.budget}</p>
                    <p className='movie__popularity'>Popularity: {movie.vote_average}</p>

                </div>
            </React.Fragment>

        )
        let content = loading ? <Spinner /> : info;
        return <div>{content}</div>;

    }

}

const mapStateToProps = state => ({
    movie: state.movies.movie,
    loading: state.movies.loading,


})

export default withRouter(connect(mapStateToProps, {fetchMovie,setLoading})(onClickOutside(MovieDetails)));