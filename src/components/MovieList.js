import React, { Component } from 'react';


export const Movie = props => {
    let colorScore = props.rating * 10 >= 75 ? 'rgb(61, 199, 61)' :
        props.rating * 10 >= 50 ? 'rgb(236, 132, 13)' : 'rgb(243, 30, 58)';    
    return (
        <li className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Cover" />
            <div className="infos"> 
                <div className="main-infos">
                    <div className="rating">
                        <span style={{borderColor: colorScore}} className="score">{props.rating * 10}%</span>
                    </div>     
                    <h3 className="title">{props.title}</h3>
                    <h4 className="release">{props.date}</h4>
                </div>
                <p className="overview">{props.overview.slice(0,120)}...</p>
            </div>
        </li>
    );  
};