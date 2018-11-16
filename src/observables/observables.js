import {
  fromEvent,
  from,
  merge,
  of
} from 'rxjs';
import {
  map,
  filter,
  throttleTime,
  switchMap,
  distinctUntilChanged,
  debounceTime,
  reduce,
  tap,
  concatAll
} from 'rxjs/operators';
import {
  API
} from '../components/Api';

const selectProps = ({
  id,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  runtime,
  similar,
  cast,
  vote_average,
  vote_count,
  genres
}) => ({
  id,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  runtime,
  similar,
  cast,
  vote_average,
  vote_count,
  genres
});

export const autoCompletion$ = (element, eventType) => {
  return fromEvent(element, eventType)
    .pipe(
      debounceTime(500),
      throttleTime(1000),
      distinctUntilChanged(),
      filter(key => key.target.value),
      map(key => key.target.value),
      switchMap(value => from(API.fetchMovieSearched(value))
        .pipe(
          map(res => res.results),
        ),
      )
    );
};

const movieDetails$ = movieId => {
  return from(API.fetchMovieDetails(movieId));
};

const movieDetailsCast$ = movieId => {
  return from(API.fetchMovieCast(movieId));
}

const movieDetailsSimilar$ = movieId => {
  return from(API.fetchSimilarMovies(movieId));
};

const fetchTrailer$ = movieId => {
  return from(API.fetchTrailer(movieId));
};

export const movie$ = (movieId) => {
  return merge(
    movieDetails$(movieId),
    movieDetailsCast$(movieId),
    movieDetailsSimilar$(movieId),
  ).pipe(
    //merge all 3 observables, and reduce them to one object, with the new property similar which is result prop from similarMovies observable
    reduce((acc, x) => Object.assign(acc, x, {
      similar: x.results
    }), {}),
    //return new object with selected props
    map(selectProps),
    //return new observable which is the movie returned from previous map merged with the fetchTrailer observable
    //I merged trailer here and not in the first because similarMovies and fetchTrailer observables has results propertie and like this I avoided that the similar and trailer prop from the new object returned are overwrited with prop results from the last observables from the first merge
    map(movie => merge( of (movie), fetchTrailer$(movieId))),
    concatAll(),
    reduce((acc, x) => Object.assign(acc, x, {
      trailer: x.results
    }), {}),
    tap(movie => delete movie['results']),
  )
};