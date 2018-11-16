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
    reduce((acc, x) => Object.assign(acc, x, {
      similar: x.results
    }), {}),
    map(selectProps),
    map(movie => merge( of (movie), fetchTrailer$(movieId))),
    concatAll(),
    reduce((acc, x) => Object.assign(acc, x, {
      trailer: x.results
    }), {}),
    tap(movie => delete movie['results']),
  )
};