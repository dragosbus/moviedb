import * as ActionTypes from '../actionTypes/actionTypes';

const apiDataReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_FAVORITE:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default apiDataReducer;