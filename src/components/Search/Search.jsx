import React from "react";
import {connect} from 'react-redux';
import {searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy} from '../../actions/index';
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
        const sortByReleaseData = document.querySelector('.release')
        const sortByRating = document.querySelector('.rating')
        if (sortByReleaseData){
            sortByReleaseData.addEventListener('click', () =>{
                sortByReleaseData.classList.add('activeSort');
                sortByRating.classList.remove('activeSort')
            })
        }
        if (sortByRating){
            sortByRating.addEventListener('click', () =>{
                sortByRating.classList.add('activeSort');
                sortByReleaseData.classList.remove('activeSort')
            })
        }

        this.props.sortMovies()
    }
    searchBy = (e) => {
        e.preventDefault();
        this.props.isActiveSearchBy();
        console.log(isActiveSearchBy)
      //  this.props.searchByTitle(e.target.value)
       /* const titleActive = document.querySelector('#title');
        const genresActive = document.querySelector('#genres')
        if (titleActive){
            titleActive.addEventListener('click', ()=>{
                titleActive.classList.add('active');
                genresActive.classList.remove('active')
            })
        }
        if (genresActive){
            genresActive.addEventListener('click', ()=>{
                genresActive.classList.add('active')
                titleActive.classList.remove('active')
            })
        }*/
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
                                    <button className={`button search-by ${this.state.isActiveSearchBy ? 'active':''}`}
                                            onClick={this.searchBy}
                                            value='title'
                                            id='title'>Title</button>
                                    <button className={`button search-by `}
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
                                <p className='sort-by release' >release date</p>
                                <p className='sort-by rating' onClick={this.sortBy}>rating</p>
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
    counter: state.counter,
    movies:state.movies,
    isActiveSearchBy: state.isActiveSearchBy,

} )

export default connect(mapStateToProps,{searchMovie,fetchMovies,searchByTitle,sortMovies,isActiveSearchBy})(Search);
