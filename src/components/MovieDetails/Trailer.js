import React from 'react';

const Trailer = props => {
  return (
    <div className="video-container" style={{ display: props.trailerPlayed ? 'block' : 'none' }}>
      <iframe
        src={`https://www.youtube.com/embed/${props.trailer}?autoplay=1&controls=0&loop=1&showinfo=0`}
        allow="autoplay; encrypted-media"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        frameBorder="0"
        modestbranding="1"
      />
    </div>
  );
};

export default Trailer;
