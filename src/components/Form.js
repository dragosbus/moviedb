import React, { Component } from 'react';
import {FaSearch} from 'react-icons/fa';

export class Form extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.setSearchTerm(this.searchTerm.value);
    this.props.getData(this.searchTerm.value)
  }

  render() {
    return (
      <form id="movie-search" onSubmit={this.submitForm.bind(this)}>
        <input type="search" ref={search => (this.searchTerm = search)} />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    );
  }
}
