import React, { Component } from 'react';
import {Api} from './components/Api';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Movies } from './components/Movies';
import {MovieDetail} from './components/MovieDetail';
import './App.css';

import {connect} from 'react-redux';

import * as Actions from './actionCreators/actionCreators';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      trailer: '',
      movieDetailOn: false
    }
    this.getData = this.getData.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getData(movie) {
    let api = new Api();
    api.getData(movie).then(res => {
      if (res.data.results.length > 0) {
        let data = res.data.results;
        data.forEach(movie=>{
          api.getTrailer(movie.id).then(res => {
            if(res.trailers.results.length) {
              movie.trailer = res.trailers.results[0].key
              this.setState(prevState=>{
                return {
                  movies: prevState.movies.concat(movie)
                }
              });
            }       
          });
        });//end fetching trailers
      } else {
        this.setState({
          movies: []
        });
      }
    });//end fetching movies
  }

  showDetails(index) {
    this.setState({
      movieDetailOn: !this.state.movieDetailOn,
      trailer: this.state.movies[index].trailer
    });
  }

  closeModal() {
    this.setState({
      movieDetailOn: !this.state.movieDetailOn
    });
  }

  render() {
    let {setSearchTerm, searchTerm} = this.props;

    return (
      <div className="App">
        <Header />
        <Form 
          setSearchTerm={setSearchTerm} 
          getData={this.getData} 
          searchTerm={searchTerm}
        />
        <Movies 
          movies={this.state.movies} 
          showDetails={this.showDetails}
        />
        <MovieDetail 
          movieDetailOn={this.state.movieDetailOn} 
          trailer={this.state.movieDetailOn ? `https://www.youtube.com/embed/${this.state.trailer}?autoplay=1&controls=0&loop=1&showinfo=0` : ''} 
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm(value) {
    dispatch(Actions.setSearchTerm(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
