import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie} from '../../../actions/index';
import {Link} from 'react-router-dom';
import './MovieDetails.css';


export class MovieDetails extends React.Component{

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
    }

    render() {
        return(
            <React.Fragment>
                <div className='modal'>
                    <h1>{this.props.movie.title}</h1>
                   <Link to='/'>
                       <button > X </button>
                   </Link>

                </div>
            </React.Fragment>

        )
    }

}

const mapStateToProps = state => ({
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie})(MovieDetails);