import * as ActionTypes from '../actionTypes/actionTypes';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_FAVORITE:
      return [
        ...state.map(movie => {
          if(movie.id === action.payload.id) {
            return null;
          }
          return movie;
        }).filter(movie => movie !== null),
        action.payload
      ];
    default:
      return state;
  }
};