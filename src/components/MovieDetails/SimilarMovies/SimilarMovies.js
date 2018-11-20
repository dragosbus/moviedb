import React from 'react';
import SlideMovies from '../../SlideMovies/SlideMovies';
import './SimilarMovies.css';

const SimilarMovies = props => {
  return(
    <div className="similar-movies">
    <h4>Similar Movies</h4>
      <SlideMovies
        data={props.similarMovies || []}
        toggleMovieDetails={props.toggleMovieDetails}
        isMovieDetails={true}
      />
    </div>
  );
};

export default SimilarMovies;