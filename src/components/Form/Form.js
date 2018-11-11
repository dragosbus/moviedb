import React, { Component } from 'react';
import Input from './Input';
import { FaSearch } from 'react-icons/fa';
import {autoCompletion$} from '../../observables/observables';
import {autoCompletion, emptyAutoCompletion} from '../../actionCreators/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Form extends Component {
  state = {
    query: '',
    inputQueryShowed: false
  };

  onChangeQuery = e => {
    autoCompletion$(e.target, 'input').subscribe(movies=>{
      this.props.emptyAutoCompletion();
      this.props.autoCompletion(movies);
    });
    this.setState({ query: e.target.value });
  };

  toggleInput = () => {
    this.setState({ inputQueryShowed: !this.state.inputQueryShowed });
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.inputQueryShowed) {
      this.props.setSearchTerm(this.state.query);
      this.props.getData(this.state.query);
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

const mapDispatchToProps = dispatch => bindActionCreators({
  autoCompletion: autoCompletion,
  emptyAutoCompletion: emptyAutoCompletion
}, dispatch);

export default connect(null, mapDispatchToProps)(Form);
