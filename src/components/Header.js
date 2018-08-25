import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';


export class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <Link to='/'>
                    <img src={logo} alt="Logo"/>
                </Link>
            </header>
        );
    }
};