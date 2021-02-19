import React from 'react';
import MovieCatalog from "./components/Movie-catalog";
import Search from './components/Search/Search';
import './App.css';

class App extends React.Component{
  render(){
    return(

          <div >

            <div>
              <Search/>
              <MovieCatalog/>
            </div>
          </div>


    )
  }
}
export default App;
