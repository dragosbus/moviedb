import * as ActionTypes from '../actionTypes/actionTypes';

const trailerApiReducer = (state = '', action) => {
    switch (action.type) {
        case ActionTypes.GET_TRAILER:
            return action.payload;
        default:
            return state;
    }
};

export default trailerApiReducer;