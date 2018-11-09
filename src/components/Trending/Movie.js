import React from 'react';

export const Movie = props => {
  return (
    <ul>
      {props.weekTrending.slice(0, 10).map((movie, i) => {
        return (
          <li
            className="movie-trending"
            key={i}
            style={{ left: `${i * 120}px` }}
            onClick={()=>props.toggleMovieDetails(movie)}
          >
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} />
          </li>
        );
      })}
    </ul>
  );
};
