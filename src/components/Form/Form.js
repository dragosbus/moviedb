import React, { Component } from 'react';
import Input from './Input';
import { FaSearch } from 'react-icons/fa';

export default class Form extends Component {
  state = {
    query: '',
    inputQueryShowed: true
  };

  onChangeQuery = e => {
    this.setState({ query: e.target.value });
  };

  toggleInput = () => {
    this.setState({ inputQueryShowed: !this.state.inputQueryShowed });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.setSearchTerm(this.state.query);
    this.props.getData(this.state.query);
  };

  render() {
    return (
      <form id="movie-search" onSubmit={this.submitForm}>
        <Input
          type="search"
          placeholder={'Search movie'}
          value={this.state.query}
          onChangeHandler={this.onChangeQuery}
          style={{
            display: this.state.inputQueryShowed ? 'block' : 'none'
          }}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    );
  }
}
