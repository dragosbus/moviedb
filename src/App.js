import React, { Component } from 'react';
import {Api} from './components/Api';
import { Header } from './components/Header';
import { Form } from './components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.getData(e.target.elements[0].value);
  }

  getData(movie) {
    let api = new Api();
    api.getData(movie).then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form formSubmit={this.formSubmit}/>
      </div>
    );
  }
}

export default App;
