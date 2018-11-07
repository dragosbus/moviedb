import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';
import apiDataReducer from './apiData';
import trailerApiReducer from './trailerApi';
import {weekTrendingReducer} from './weekTrending';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    data: apiDataReducer,
    trailer: trailerApiReducer,
    weekTrending: weekTrendingReducer,
});

export default rootReducer;