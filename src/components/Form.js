import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';


export class Form extends Component {

    render() {
        return (
            <form id="movie-search" onSubmit={this.props.formSubmit}>
                <input type="search" />
                <button type="submit">
                    <FaSearch/>
                </button>
            </form>
        );
    }
}