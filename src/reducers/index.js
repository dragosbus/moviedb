import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';
import apiDataReducer from './apiData';
import trailerApiReducer from './trailerApi';
import favoriteMoviesReducer from './favoritesMovies';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    data: apiDataReducer,
    trailer: trailerApiReducer,
    favoritesMovies: favoriteMoviesReducer
});

export default rootReducer;