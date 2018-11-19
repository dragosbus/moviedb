import React from 'react';
import styled from 'styled-components';
import './MovieDetails.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actionCreators/actionCreators';
import playBtn from '../../play-button.svg';
import { HeartIcon } from '../Icons/Icons';
import CastList from './Cast';
import SimilarMovies from './SimilarMovies';
import Trailer from './Trailer';

const MovieDetailsStyle = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  background: ${props =>
    props.poster
      ? `linear-gradient(rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.94) 45%), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${
          props.poster
        })`
      : ''};
  padding-top: ${props => (props.trailerPlayed ? '75%' : 0)};
`;

class MovieDetails extends React.Component {
  state = {
    length: 8,
    trailerPlayed: false,
    castToggled: false
  };

  noScroll = () => {
    window.scrollTo(0, 0);
  };

  componentDidUpdate(prevProps) {
    //remove noScroll event when the movie details component is hided
    if (prevProps.movieDetailsOn) {
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

  hideMovieDetails = () => {
    this.props.hideMovieDetails();
    if (this.state.trailerPlayed) {
      this.playTrailer();
    }
  };

  playTrailer = () => {
    this.setState({ trailerPlayed: !this.state.trailerPlayed });
  };

  componentWillUnmount() {
    console.log('unmounted')
  }

  render() {
    let { movie, movieDetailsOn } = this.props;

    const poster = movie ? movie.poster_path : '';

    return !movieDetailsOn ? (
      ''
    ) : (
      <MovieDetailsStyle className="movie-details" poster={poster} trailerPlayed={this.state.trailerPlayed} show={movieDetailsOn}>
        <button className="movie-details--hide" onClick={this.hideMovieDetails}>
          X
        </button>
        <button className="btn-add--favorite" onClick={() => this.props.addToFavorite(movie)}>
          <HeartIcon />
        </button>
        <button className="play-trailer" onClick={this.playTrailer}>
          <img src={playBtn} alt="play trailer" />
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
            <CastList 
              cast={this.props.movie.cast} 
              castLength={this.state.length} 
            />
            <button className="see-more-cast">See More</button>
          </div>
        </div>
        <SimilarMovies 
          similarMovies={movie.similar} 
          toggleMovieDetails={this.props.toggleMovieDetails} 
        />
        <Trailer 
          trailer={this.props.trailer} 
          trailerPlayed={this.state.trailerPlayed} 
        />
      </MovieDetailsStyle>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToFavorite: Actions.addToFavorite
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(MovieDetails);
