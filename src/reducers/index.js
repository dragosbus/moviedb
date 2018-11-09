import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';
import apiDataReducer from './apiData';
import trailerApiReducer from './trailerApi';
import {weekTrendingReducer} from './weekTrending';
import {movieDetailsReducer} from './movieDetails';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    data: apiDataReducer,
    trailer: trailerApiReducer,
    weekTrending: weekTrendingReducer,
    movieDetails: movieDetailsReducer,
});

export default rootReducer;