import React  from 'react';
import MovieCatalog from "./components/Movie-catalog";
import Search from './components/Search/Search';
import {Provider} from "react-redux";
import store from './store';

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div >

                    <div>
                        <Search/>
                        <MovieCatalog/>
                    </div>
                </div>
            </Provider>

        )
    }
}
export default App;