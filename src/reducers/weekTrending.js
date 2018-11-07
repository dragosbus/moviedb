import * as ActionTypes from '../actionTypes/actionTypes';

export const weekTrendingReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_WEEK_TRENDING:
      return action.payload;
    default:
      return state;
  }
};