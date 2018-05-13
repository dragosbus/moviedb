import React, { Component } from 'react';


export const Movie = props => {
    return (
        <li className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Cover" />
            <div className="infos"> 
                <div className="main-infos">
                    <div className="rating">
                        <span className="score">{props.rating * 10}%</span>
                    </div>     
                    <h3 className="title">{props.title}</h3>
                    <h4 className="release">{props.date}</h4>
                </div>
                <p className="overview">{props.overview.slice(0,120)}...</p>
            </div>
        </li>
    );  
};