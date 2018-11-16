import * as ActionTypes from '../actionTypes/actionTypes';

export const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};