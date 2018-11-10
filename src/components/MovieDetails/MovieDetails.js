import React from 'react';
import './MovieDetails.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actionCreators/actionCreators';
import playBtn from '../../play-button.svg'

class MovieDetails extends React.Component {
  state = {
    cast: 4,
    castToggled: false
  };

  noScroll = () => {
    window.scrollTo(0, 0);
  };

  componentDidUpdate(prevProps) {
    //remove noScroll event when the movie details component is hided
    if (prevProps.movie.on) {
      window.removeEventListener('scroll', this.noScroll);
    } else {
      window.addEventListener('scroll', this.noScroll);
    }
  }

  calcRuntime = runtime => {
    let runtimeInt = parseInt(runtime, 10);
    let hour = parseInt(runtimeInt / 60, 10);
    let minutes = runtimeInt - hour * 60;

    return `${hour} h ${minutes} min`;
  };

  render() {
    let { movie, hideMovieDetails } = this.props;
    const poster = movie ? movie.poster_path : '';
    const styleMovieDetails = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.94) 45%), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster})`
    };

    return !movie.on ? (
      ''
    ) : (
      <div className="movie-details" style={styleMovieDetails}>
        <button className="movie-details--hide" onClick={hideMovieDetails}>
          X
        </button>
        <button className="play-trailer">
          <img src={playBtn} alt="play trailer"/>
        </button>
        <div className="details">
          <p>
            <span>{movie.release_date}</span>
            <span>{movie.genres ? movie.genres[0].name : ''}</span>
          </p>
          <h4>{movie.original_title}</h4>
          <p>{this.calcRuntime(movie.runtime)}</p>
          <p className="movie-details--overview">{movie.overview}</p>
          <p>{movie.vote_count} rating</p>
          <div className="cast">
            <h4>Stars</h4>
            {movie.cast &&
              movie.cast.slice(0, this.state.cast).map(actor => <span key={actor.credit_id}>{actor.name}</span>)}
            <button className="see-more-cast">See More</button>
          </div>
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
