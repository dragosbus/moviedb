import React, { Component } from 'react';
import {Input, InputRef} from './Input';
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

  inpRef = React.createRef();

  autoCompletionSubscription = (event) => {
    return autoCompletion$(event, 'input').subscribe(movies=>{
      //for every typing, clear the previous list of movies
      this.props.emptyAutoCompletion();
      this.props.autoCompletion(movies);
    });
  }

  onChangeQuery = e => {
    this.autoCompletionSubscription(e.target);
    this.props.setSearchTerm(e.target.value);
    this.setState({ query: e.target.value });
  };

  toggleInput = () => {
    this.setState({ inputQueryShowed: !this.state.inputQueryShowed });
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.inputQueryShowed) {
      //fetch the movies found and then unsubscribe from event for avoid memory leak
      this.props.fetchMovieSearched(this.props.searchTerm);
      this.autoCompletionSubscription(this.inpRef.current).unsubscribe();
    } else {
      this.toggleInput();
    }
  };

  render() {
    return (
      <form id="movie-search" onSubmit={this.submitForm}>
        <InputRef
          type="search"
          placeholder={'Search movie'}
          value={this.props.searchTerm}
          onChangeHandler={this.onChangeQuery}
          style={{
            display: this.state.inputQueryShowed ? 'block' : 'none'
          }}
          ref={this.inpRef}
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
