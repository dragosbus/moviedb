import React from 'react';

const SlideMovies = props => (WrappedComponent) => {
  return class SlideMovies extends React.Component {
    render() {
      return <WrappedComponent {...props}/>
    }
  }
}

export default SlideMovies;