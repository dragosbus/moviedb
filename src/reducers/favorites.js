import * as ActionTypes from '../actionTypes/actionTypes';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_FAVORITE:
      return [
        ...state.filter(movie => movie.id !== action.payload.id),
        action.payload
      ];
    default:
      return state;
  }
};