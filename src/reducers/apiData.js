import * as ActionTypes from '../actionTypes/actionTypes';

const apiDataReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_API_DATA:
            return [...action.payload];
        default:
            return state;
    }
};

export default apiDataReducer;