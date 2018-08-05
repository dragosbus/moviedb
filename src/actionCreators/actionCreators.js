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

export const addApiMiddleware = term => dispatch => {
    let api = new Api();
    api.getData(term).then(res=>dispatch(addApiData(res.data.results)))
};