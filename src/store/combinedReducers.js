import { combineReducers } from "redux";
import favoriteReducer from './reducers/favorite';
import movieReducer from './reducers/movie';

export default combineReducers({
    fav : favoriteReducer,
    movies : movieReducer
})