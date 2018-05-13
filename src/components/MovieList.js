import React, { Component } from 'react';


export const Movie = props => {
    return (
        <li className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Cover" />
            <div className="infos">
                <h3 className="title">{props.title}</h3>
            </div>
        </li>
    );  
};