import {fromEvent, from} from 'rxjs';
import {map, filter, throttleTime, switchMap, distinctUntilChanged, debounceTime} from 'rxjs/operators';
import {API} from '../components/Api';

export const autoCompletion$ = (element, eventType) => {
  return fromEvent(element, eventType)
    .pipe(
      debounceTime(500),
      throttleTime(1000),
      distinctUntilChanged(),
      filter(key=>key.target.value),
      map(key=>key.target.value),
      switchMap(value=>from(API.fetchMovieSearched(value))
        .pipe(
          map(res=>res.results),
        ),
      )
    );
};