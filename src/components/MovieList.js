import React, { Component } from 'react';


export const Movie = props => {
    return (
        <li className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Cover"/>
        </li>
    );  
};