import {combineReducers} from 'redux';
import searchTermReducer from './searchTerm';

const rootReducer = combineReducers({
    searchTerm: searchTermReducer
});

export default rootReducer;