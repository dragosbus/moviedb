import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Form } from './components/Form';
import { Movies } from './components/Movies';
import { MovieDetail } from './components/MovieDetail';
import './App.css';

import { connect } from 'react-redux';

import * as Actions from './actionCreators/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetailOn: false
    };
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showDetails(index) {
    this.props.getTrailer(this.props.movies[index].id)
    this.setState({
      movieDetailOn: !this.state.movieDetailOn
    });
  }

  closeModal() {
    this.setState({
      movieDetailOn: !this.state.movieDetailOn
    });
  }

  render() {
    let { setSearchTerm, getApiData, searchTerm, movies, trailer } = this.props;
    return (
      <div className="App">
        <Form setSearchTerm={setSearchTerm} getData={getApiData} searchTerm={searchTerm} />
        <Link to="/favorites">Favorites</Link>
        <Movies movies={movies} showDetails={this.showDetails} />
        <MovieDetail
          movieDetailOn={this.state.movieDetailOn}
          trailer={
            this.state.movieDetailOn
              ? `https://www.youtube.com/embed/${trailer}?autoplay=1&controls=0&loop=1&showinfo=0`
              : ''
          }
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movies: state.data,
  trailer: state.trailer
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm(value) {
    dispatch(Actions.setSearchTerm(value));
  },
  getApiData(term) {
    dispatch(Actions.addApiMiddleware(term));
  },
  getTrailer(movieId) {
    dispatch(Actions.getTrailerMiddleware(movieId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
