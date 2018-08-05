import * as ActionTypes from '../actionTypes/actionTypes';
import { Api } from '../components/Api';

export const setSearchTerm = value => ({
    type: ActionTypes.SET_SEARCH_TERM,
    payload: value
});

export const addApiData = (data) => ({
    type: ActionTypes.ADD_API_DATA,
    payload: data
});

export const getTrailer = (trailer) => ({
    type: ActionTypes.GET_TRAILER,
    payload: trailer
});

export const addApiMiddleware = term => dispatch => {
    let api = new Api();
    api.getData(term).then(res=>dispatch(addApiData(res.data.results)))
};

export const getTrailerMiddleware = movieId => dispatch => {
    let api = new Api();
    api.getTrailer(movieId)
        .then(res=> {
            let trailer = res.trailers.results[0].key;
            dispatch(getTrailer(trailer));
        })
}