import React from 'react';
import './MovieDetails.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actionCreators/actionCreators';

class MovieDetails extends React.Component {
  render() {
    let { movie, hideMovieDetails } = this.props;
    const poster = movie ? movie.poster_path : '';
    const styleMovieDetails = {
      display: movie.on ? 'block' : 'none',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.74) 45%), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster})`
    };
    
    return (
      <div className="movie-details" style={styleMovieDetails}>
        <button onClick={hideMovieDetails}>X</button>
        <div className="details">
          <p>
            <span>{movie.release_date}</span>
            <span>{movie.genres ? movie.genres[0].name : ''}</span>
          </p>
          <h4>{movie.original_title}</h4>
          <p>{movie.runtime}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movieDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideMovieDetails: Actions.hideMovieDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
