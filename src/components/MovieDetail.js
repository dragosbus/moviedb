import React, { Component } from 'react';


export const MovieDetail = props =>{
    return (
        <div className={props.movieDetailOn ? "movie-detail-on" : "movie-detail"}>
            <div>
                <h2>{props.title}</h2>
                <div>
                    <iframe src={props.trailer} allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
            </div>
        </div>
    );
};