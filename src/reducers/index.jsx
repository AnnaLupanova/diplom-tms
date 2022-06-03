import Search_reducer from "./search_reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    movies: Search_reducer
})
export default rootReducer;