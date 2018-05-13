import React, { Component } from 'react';
import {Movie} from './MovieList';


export class Movies extends Component {
    render() {
        return (
            <ul className="movie-list">
                {this.props.movies.map((movie, i) => <Movie key={i} cover={movie.poster_path} title={movie.original_title} rating={movie.vote_average}/>)} 
            </ul>
        );
    }
}