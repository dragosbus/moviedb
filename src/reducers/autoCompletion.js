import * as ActionTypes from '../actionTypes/actionTypes';

export const autoCompletionReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTO_COMPLETION:
      return action.payload;
    case ActionTypes.EMPTY_AUTO_COMPLETION:
      return [];
    default:
      return state;
  }
}