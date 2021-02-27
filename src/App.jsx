import React from 'react';
import MovieCatalog from "./components/Movie-catalog";
import Search from './components/Search/Search';
import {Provider} from "react-redux";
import store from './store';
import MovieDetails from './components/Movie-catalog/Movie-details/MovieDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from "./components/Landing/Landing";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>

                    <div>

                        <div>

                            <Switch>
                                <Route exact path='/' ><Landing/></Route>
                                <Route exact path='/film/:id' > <Search/><MovieDetails/> <MovieCatalog/> </Route>

                            </Switch>

                        </div>
                    </div>
                </Router>

            </Provider>

        )
    }
}

export default App;