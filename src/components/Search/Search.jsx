import React from "react";


class Search extends React.Component {


    render() {
        return (
            <form className='form'

                  action="">
                <input type="text"
                       className='input-search'
                       placeholder='Input movie'
                />

                <button type='submit' className='button'>Submit</button>

            </form>
        )
    }
}



export default Search;
