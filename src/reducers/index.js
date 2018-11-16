import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';
import apiDataReducer from './apiData';
import {weekTrendingReducer} from './weekTrending';
import {movieDetailsReducer} from './movieDetails';
import {autoCompletionReducer} from './autoCompletion';
import {favoritesReducer} from './favorites';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    data: apiDataReducer,
    weekTrending: weekTrendingReducer,
    movieDetailsId: movieDetailsReducer,
    autoCompletion: autoCompletionReducer,
    favorites: favoritesReducer,
});

export default rootReducer;