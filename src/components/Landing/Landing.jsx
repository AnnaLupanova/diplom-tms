import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner';
import MovieCatalog from '../Movie-catalog/Movie-catalog';
import Search from '../Search/Search';

export class Landing extends Component {
    
    render() {
        const { loading } = this.props
       
        return (
            <div >
                <Search />
                {loading ? <Spinner /> : <MovieCatalog />}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing)