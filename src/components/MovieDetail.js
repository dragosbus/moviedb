import React, { Component } from 'react';


export const MovieDetail = props =>{
    return (
        <div className={props.movieDetailOn ? "movie-detail-on" : "movie-detail"}>
            <div>
                <h2>{props.title}</h2>
                <div>
                    <iframe src={props.trailer} allow="autoplay; encrypted-media" allowFullScreen frameborder="0"></iframe></div>
            </div>
        </div>
    );
};
<div style="position:relative;height:0;padding-bottom:29.61%"><iframe src="https://www.youtube.com/embed/bGt-saFvkNk?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="1216" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>