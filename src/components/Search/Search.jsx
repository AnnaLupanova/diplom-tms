import React from "react";
import {connect} from 'react-redux';
import {searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy,isActiveSortBy} from '../../actions/index';
import './Search.css';

class Search extends React.Component {

    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = (e) => {

        e.preventDefault();
        this.props.fetchMovies(this.props.text, this.props.searchBy);

    }


    sortBy = (e) => {
        e.preventDefault();
        this.props.sortMovies(e.target.textContent)
        this.props.isActiveSortBy();

    }
    searchBy = (e) => {
        e.preventDefault();
        this.props.isActiveSearchBy();
      this.props.searchByTitle(e.target.value)

    }

    render() {
        return (
            <div className='search-tools'>
                <div className='header'>
                    <div className='overlay'>
                        <div className="container">
                            <h2>Find your movie</h2>
                            <form className='form'
                                  onSubmit={this.onSubmit}
                                  action="">
                                <input type="text"
                                       className='input-search'
                                       placeholder='Input movie'
                                       onChange={this.onChange}/>
                                <div className='search-settings'>
                                    <p className='search-by-inscription'>Search by</p>
                                    <button className={`button search-by ${this.props.isActiveSearch && this.props.searchBy==='title'  ? 'active':''}`}
                                            onClick={this.searchBy}
                                            value='title'
                                            id='title'>Title</button>
                                    <button className={`button search-by ${this.props.isActiveSearch && this.props.searchBy==='genres' ? 'active':' '}`}
                                            onClick={this.searchBy}
                                            value='genres'
                                            id='genres'>Genre</button>
                                    <button type='submit' className='button'>Submit</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className ='section-result'>
                    <div className='container'>
                        <div className='settings'>
                            <p className='result-movies'>{this.props.movies.movies.length} movies found</p>
                            <div className='sort'>
                                <p className='sort-by-inscription'>Sort by</p>
                                <p  onClick={this.sortBy} className={`sort-by release ${this.props.isActiveSort && this.props.sortBy==='release date'  ? 'activeSort':''}`}>release date</p>
                                <p   onClick={this.sortBy} className={`sort-by rating ${this.props.isActiveSort && this.props.sortBy==='rating'  ? 'activeSort':''}`} >rating</p>
                            </div></div>
                    </div>

                </div>
            </div>

        )
    }
}
const  mapStateToProps = (state) => ({
    text: state.movies.text,
    searchBy: state.movies.searchBy,
    sortBy:state.movies.sortBy,
    movies:state.movies,
    isActiveSearch: state.movies.isActiveSearchBy,
    isActiveSort:state.movies.isActiveSortBy


} )

export default connect(mapStateToProps,{searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy,isActiveSortBy})(Search);
