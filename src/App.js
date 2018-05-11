import React, { Component } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    }
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements[0].value);
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
