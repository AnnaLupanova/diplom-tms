import React from 'react';
import imgError from './notFound.png';
import './PageNotFound.css';
import {Link} from 'react-router-dom';

class PageNotFound extends React.Component{
    render() {
        return(
            <div className='page__not__found'>

                <div className='text'>
                    <p className='not__found'>Page not found</p>
                    <Link to='/'>
                        <p className='go__back'>Go back to search movies</p>
                    </Link>
                </div>
                <div className='img__error'>
                    <img src={imgError} alt=""/>
                </div>

            </div>
        )
    }
}

export default PageNotFound;