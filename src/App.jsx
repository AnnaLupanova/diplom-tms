import React from 'react';
import MovieCatalog from "./components/Movie-catalog";
import Search from './components/Search/Search';
import {Provider} from "react-redux";
import store from './store';
import MovieDetails from './components/Movie-catalog/MovieItem/Movie-details/MovieDetails';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import PageNotFound from './components/Page-not-found/PageNotFound';

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
                                <Route path='*' component={PageNotFound}/>
                            </Switch>

                        </div>
                    </div>
                </Router>

            </Provider>

        )
    }
}

export default App;