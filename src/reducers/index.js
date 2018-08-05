import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';
import apiDataReducer from './apiData';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    data: apiDataReducer
});

export default rootReducer;