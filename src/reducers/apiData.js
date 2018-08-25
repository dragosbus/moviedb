import * as ActionTypes from '../actionTypes/actionTypes';

const apiDataReducer = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_API_DATA:
            return action.payload.map(movie=>{
                return Object.assign({}, movie, {favorite: false})
            });
        case ActionTypes.ADD_TO_FAVORITE:
            return state.map(movie=>{
                if(action.payload === movie) {
                    movie.favorite = !movie.favorite;
                }
                return movie;
            });
        default:
            return state;
    }
};

export default apiDataReducer;