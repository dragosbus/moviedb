import * as ActionTypes from '../actionTypes/actionTypes';

const favoriteMoviesReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_FAVORITE:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default favoriteMoviesReducer;