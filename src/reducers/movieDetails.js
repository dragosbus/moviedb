import * as ActionTypes from '../actionTypes/actionTypes';

export const movieDetailsReducer = (state = {
  on: false
}, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_DETAILS:
      return Object.assign({}, {
        on: true
      }, {id: action.payload});
    case ActionTypes.HIDE_MOVIE_DETAILS:
      return Object.assign({}, {
        on: false
      })
    default:
      return state;
  }
};