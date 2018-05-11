import React, { Component } from 'react';
import logo from '../logo.svg';


export class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <img src={logo} alt="Logo"/>
            </header>
        );
    }
};