import React, { Component } from 'react';
import Input from './Input';
import { FaSearch } from 'react-icons/fa';
import {autoCompletion$} from '../../observables/observables';
import {autoCompletion, emptyAutoCompletion, setSearchTerm, fetchMovieSearched} from '../../actionCreators/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Form extends Component {
  state = {
    query: '',
    inputQueryShowed: false
  };

  onChangeQuery = e => {
    autoCompletion$(e.target, 'input').subscribe(movies=>{
      //for every typing, clear the previous list of movies
      this.props.emptyAutoCompletion();
      this.props.autoCompletion(movies);
    });
    this.props.setSearchTerm(e.target.value);
    this.setState({ query: e.target.value });
  };

  toggleInput = () => {
    this.setState({ inputQueryShowed: !this.state.inputQueryShowed });
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.inputQueryShowed) {
      this.props.fetchMovieSearched(this.props.searchTerm);
    } else {
      this.toggleInput();
    }
  };

  render() {
    return (
      <form id="movie-search" onSubmit={this.submitForm}>
        <Input
          type="search"
          placeholder={'Search movie'}
          value={this.props.searchTerm}
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

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  autoCompletion: autoCompletion,
  emptyAutoCompletion: emptyAutoCompletion,
  setSearchTerm: setSearchTerm,
  fetchMovieSearched: fetchMovieSearched,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
