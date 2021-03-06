import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form/Form';
import AutoCompletion from './AutoCompletionForm/AutoCompletion';
import logo from '../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Form />
        <AutoCompletion />
      </header>
    );
  }
}
