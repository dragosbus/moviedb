import React, { Component } from 'react';
import {Movie} from './MovieList';


export class Movies extends Component {
    render() {
        return (
            <ul>
                {this.props.movies.map((movie, i) => <Movie key={i} cover={movie.poster_path}/>)} 
            </ul>
        );
    }
}