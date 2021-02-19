import React from "react";
import {connect} from 'react-redux';
import {searchMovie,fetchMovies,searchByTitle} from '../../actions/index';
import './Search.css';

class Search extends React.Component {

    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = (e) => {

        e.preventDefault();
        this.props.fetchMovies(this.props.text, this.props.searchBy);

    }

    searchBy = (e) => {
        e.preventDefault();
        this.props.searchByTitle(e.target.value)
        const titleActive = document.querySelector('#title');
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
        }
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
                                    <button className='button search-by'
                                            onClick={this.searchBy}
                                            value='title'
                                            id='title'>Title</button>
                                    <button className=' button search-by'
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
                            <p className='result-movies'>{this.props.counter} movies found</p>
                            </div>
                    </div>

                </div>
            </div>

        )
    }
}
const  mapStateToProps = (state) => ({
    text: state.movies.text,
    searchBy: state.movies.searchBy,
    counter: state.movies.counter,
    movies:state.movies

} )

export default connect(mapStateToProps,{searchMovie,fetchMovies,searchByTitle})(Search);
