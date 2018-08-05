import * as ActionTypes from '../actionTypes/actionTypes';

const searchTermReducer = (state = '', action) => {
    switch(action.type) {
        case ActionTypes.SET_SEARCH_TERM:
            return action.payload;
        default:
            return state;
    }
};

export default searchTermReducer;