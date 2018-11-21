import React from 'react';
import styled from 'styled-components';
import './MovieDetails.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actionCreators/actionCreators';
import playBtn from '../../assets/play-button.svg';
import { HeartIcon } from '../Icons/Icons';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Trailer from './Trailer/Trailer';
import Details from './Details/Details';

const MovieDetailsStyle = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  background: ${props =>
    props.poster
      ? `linear-gradient(rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.94) 45%), url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${
          props.poster
        })`
      : ''};
  padding-top: ${props => (props.trailerPlayed ? '45vh' : 0)};
      
  @media(min-width:660px) {
    padding-top: ${props => (props.trailerPlayed ? '55%' : 0)};
  }
`;

class MovieDetails extends React.Component {
  state = {
    length: 8,
    trailerPlayed: false,
    castToggled: false
  };

  componentWillUpdate(prevProps) {
    //remove noScroll event when the movie details component is hided
    if (!prevProps.movieDetailsOn) {
      window.removeEventListener('scroll', this.noScroll);
    } else {
      window.addEventListener('scroll', this.noScroll);
    }
  }

  noScroll = () => {
    window.scrollTo(0, 0);
  };

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

  render() {
    let { movie, movieDetailsOn } = this.props;

    const poster = movie ? movie.poster_path : '';
    let styledButtonOnTrailerOn = {paddingTop: this.state.trailerPlayed ? '45vh' : 0};
    return (
      <MovieDetailsStyle
        className="movie-details"
        poster={poster}
        trailerPlayed={this.state.trailerPlayed}
        show={movieDetailsOn}
      >
        <button style={styledButtonOnTrailerOn} className="movie-details--hide" onClick={this.hideMovieDetails}>
          X
        </button>
        <button style={styledButtonOnTrailerOn} className="btn-add--favorite" onClick={() => this.props.addToFavorite(movie)}>
          <HeartIcon />
        </button>
        <button className="play-trailer" onClick={this.playTrailer}>
          <img src={playBtn} alt="play trailer" />
        </button>
        <Details movie={movie} calcRuntime={this.calcRuntime}/>
        <SimilarMovies similarMovies={movie.similar} toggleMovieDetails={this.props.toggleMovieDetails} />
        <Trailer trailer={this.props.trailer} trailerPlayed={this.state.trailerPlayed} />
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
