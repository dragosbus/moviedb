import React from 'react';
import './MovieDetails.css';

const MovieDetails = props => {
  const poster = props.movie ? props.movie.poster_path : '';
  const styleMovieDetails = {
    display: props.isShowed ? 'block' : 'none',
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster})`
  };
  return (
    <div className="movie-details" style={styleMovieDetails}>    
      <button onClick={props.hideMovieDetails}>X</button>
    </div>
  );
};

export default MovieDetails;
