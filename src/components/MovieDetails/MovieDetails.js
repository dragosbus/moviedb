import React from 'react';
import './MovieDetails.css';

const MovieDetails = props => {
  const poster = props.movie ? props.movie.poster_path : '';
  return (
    <div className="movie-details" style={{ display: props.isShowed ? 'block' : 'none' }}>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`} />
    </div>
  );
};

export default MovieDetails;
