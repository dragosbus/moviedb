import React, { Component } from 'react';


export const MovieDetail = props =>{
    return (
        <div className={props.movieDetailOn ? "movie-detail-on" : "movie-detail"}>
            <div>
                <h2>{props.title}</h2>
                <div className="video-container">
                <button className="close-modal" onClick={props.closeModal}>X</button>
                    <iframe src={props.trailer} allow="autoplay; encrypted-media"  webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen frameBorder="0" modestbranding="1"></iframe>
                </div>
            </div>
        </div>
    );
};
