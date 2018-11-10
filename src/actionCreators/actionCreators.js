import * as ActionTypes from '../actionTypes/actionTypes';
import {API} from '../components/Api';

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

export const addToFavorite = movie => ({
    type: ActionTypes.ADD_TO_FAVORITE,
    payload: movie
});

const getWeekTrending = data => ({
    type: ActionTypes.GET_WEEK_TRENDING,
    payload: data
});

export const getMovieDetails = movie => ({
    type: ActionTypes.GET_MOVIE_DETAILS,
    payload: movie
});

export const hideMovieDetails = () => ({
    type: ActionTypes.HIDE_MOVIE_DETAILS
});

export const fetchMovieDetails = movieId => dispatch => {
    API.fetchMovieDetails(movieId)
        .then(res => {
            //fetch the cast
            API.fetchMovieCast(movieId)
                .then(({
                    cast
                }) => {
                    dispatch(getMovieDetails(
                        Object.assign({}, res, {
                            cast
                        })
                    ));
                })
        })
        .catch(err => {
            console.log(err);
        });
};

export const fetchWeekTrending = () => dispatch => {
    API.fetchWeekTrending()
        .then(res => {
            dispatch(getWeekTrending(res.results));
        })
        .catch(err => {
            console.log(err);
        });
};

export const addApiMiddleware = term => dispatch => {
    API.fetchMovieSearched(term)
        .then(res => dispatch(addApiData(res.data.results)))
        .catch(err => console.log(err));
};

export const getTrailerMiddleware = movieId => dispatch => {
    API.fetchTrailer(movieId)
        .then(res => {
            let trailer = res.trailers.results[0].key;
            dispatch(getTrailer(trailer));
        }).catch(err => console.log(err))
}