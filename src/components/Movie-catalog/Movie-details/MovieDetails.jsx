import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie,isModal,setLoading,isModalNotVisible} from '../../../actions/index';
import {Link,Redirect} from 'react-router-dom';
import './MovieDetails.css';
import onClickOutside from "react-onclickoutside";


export class MovieDetails extends React.Component{



    componentDidMount = () => {
        if (this.props.isModalVis){
            this.props.fetchMovie(this.props.match.params.id);
        }




        this.props.setLoading();
    }


    handleClickOutside = () => {
        this.props.isModalNotVisible();
        console.log('ghj')
            }


    render() {
        const { loading, movie } = this.props;

        let info = (
            <React.Fragment>
                <div className='overlay'>
                    <div className='modal'>
                        <h1>{movie.title}</h1>
                        <Link to='/' >
                            <button>back</button>
                        </Link>

                    </div>
                </div>
            </React.Fragment>

        )
        let content = loading ? 'loading' : info;
        return <div>{content}</div>;

    }

}

const mapStateToProps = state => ({
    movie: state.movies.movie,
    loading: state.movies.loading,
    isModalVis: state.movies.isModalVisible
})

export default connect(mapStateToProps, {fetchMovie,isModal,setLoading,isModalNotVisible})(onClickOutside(MovieDetails));