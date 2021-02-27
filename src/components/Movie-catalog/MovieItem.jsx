import React from 'react';
import './MovieItem.css';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {isModal} from '../../actions/index';

class MovieItem extends React.Component {

    onModal = () => {
        this.props.isModal()
    }
    render() {


        const {movie} = this.props;
        return (
            <div className='section'>
                <div className='movieItem'>

                    <Link to={'/film/' + movie.id } onClick={this.onModal}>
                        <div className='poster' >
                            <img src={movie.poster_path} alt=''/>
                        </div>
                    </Link>

                     <div className='movieInfo'>
                        <div className='title'>{movie.title}</div>
                        <div className='release-date'>{movie.release_date.split('', 4)}</div>
                        <div className='genres'><p>{movie.genres.join(',')}</p></div>
                    </div>

                </div>

            </div>

        )
    }
}

const mapStateToProps = state => ({
    isModalVis: state.movies.isModalVisible
})

export default connect(mapStateToProps, {isModal})(withRouter(MovieItem));