import React, { Component } from 'react';
import { Movies } from './components/Movies';
import WeekTrending from './components/Trending/WeekTrending';
import Favorites from './components/Favorites/Favorites';
import MovieDetails from './components/MovieDetails/MovieDetails';
import FilterMenu from './components/FilterMenu/Menu';
import './App.css';
import { movie$ } from './observables/observables';

import { connect } from 'react-redux';

import * as Actions from './actionCreators/actionCreators';

class App extends Component {
  state = {
    movieDetailsOn: false,
    movieDetails: {}
  };

  componentDidMount() {
    this.props.getWeekTrending();
  }

  subscription = movieId => {
    return movie$(movieId).subscribe(movie => {
      this.setState({ movieDetails: movie, movieDetailsOn: true });
    });
  };

  toggleMovieDetails = movieId => {
    this.subscription(movieId);
  };

  unsubscribeMovieDetails = () => {
    this.setState({ movieDetailsOn: false });
  };

  render() {
    let { movies, addToFavorite } = this.props;
    console.log(this.state);
    return (
      <div className="App">
        <FilterMenu />
        <WeekTrending toggleMovieDetails={this.toggleMovieDetails} />
        <Favorites toggleMovieDetails={this.toggleMovieDetails} />
        <Movies movies={movies} showDetails={this.showDetails} addToFavorite={addToFavorite} />
        <MovieDetails
          movieDetailsOn={this.state.movieDetailsOn}
          hideMovieDetails={this.unsubscribeMovieDetails}
          movie={this.state.movieDetails}
          toggleMovieDetails={this.toggleMovieDetails}
          trailer={this.state.movieDetails.trailer ? this.state.movieDetails.trailer[0].key : ''}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movies: state.data,
  weekTrending: state.weekTrending,
  trailer: state.trailer,
  movieDetailsId: state.movieDetails,
  autoCompletion: state.autoCompletion
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm(value) {
    dispatch(Actions.setSearchTerm(value));
  },
  fetchMovieSearched(term) {
    dispatch(Actions.fetchMovieSearched(term));
  },
  addToFavorite(movie) {
    dispatch(Actions.addToFavorite(movie));
  },
  getWeekTrending() {
    dispatch(Actions.fetchWeekTrending());
  },
  toggleMovieDetails(movieId) {
    dispatch(Actions.getMovieDetails(movieId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
