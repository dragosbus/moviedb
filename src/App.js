import React, { Component } from 'react';
import {Api} from './components/Api';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Movies } from './components/Movies';
import './App.css';

const data = {

};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      trailers: []
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.getTrailers = this.getTrailers.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.getData(e.target.elements[0].value);
  }

  getData(movie) {
    let api = new Api();
    api.getData(movie).then(res => {
      if (res.data.results.length > 0) {
        this.setState({
          movies: res.data.results
        });
      } else {
        this.setState({
          movies: []
        });
      }
    });
  }

  getTrailers() {
    let api = new Api();
    let data = this.state.movies;
    let trailers = [];
    data.forEach(movie => {
      api.getTrailer(movie.id).then(res => {
        trailers.push(res.trailers);
      });
    });
    this.setState({
      trailers: trailers
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form formSubmit={this.formSubmit} />
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
