import React from "react";

import {connect} from 'react-redux';
import {searchMovie,fetchMovies} from '../../actions/index';


class Search extends React.Component {

    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = (e) => {

        e.preventDefault();
        this.props.fetchMovies(this.props.text);

    }

    render() {
        return (
            <form className='form'
                  onSubmit={this.onSubmit}
                  action="">
                <input type="text"
                       className='input-search'
                       placeholder='Input movie'
                       onChange={this.onChange}
                />

                <button type='submit' className='button'>Submit</button>

            </form>
        )
    }
}

const  mapStateToProps = (state) => ({
    text: state.movies.text

} )

export default connect(mapStateToProps,{searchMovie,fetchMovies})(Search);