import * as ActionTypes from '../actionTypes/actionTypes';

export const setSearchTerm = value => ({
    type: ActionTypes.SET_SEARCH_TERM,
    payload: value
});