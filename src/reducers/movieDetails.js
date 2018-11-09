import * as ActionTypes from '../actionTypes/actionTypes';

export const movieDetailsReducer = (state = {on: false}, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_DETAILS:
      return Object.assign({}, {on: true}, action.payload);
    default:
      return state;
  }
};