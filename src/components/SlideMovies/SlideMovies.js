import React from 'react';
import { Movie } from './Movie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 25rem;
  padding: 0;
`;

const Title = styled.h3`
  font-size: 1.75rem;
  padding: 1rem;

  @media (min-width: 960px) {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0 2rem;
`;

const uniqueMovie = favorites => {
  
};

export default class SlideMovies extends React.Component {
  
  render() {
   
    const { title, path, toggleMovieDetails, data } = this.props;
    return this.props.data.length > 0 ? (
      <Wrapper>
        <Title>{title}</Title>
        <StyledLink to={path}>More</StyledLink>
        <Movie data={data} toggleMovieDetails={toggleMovieDetails} />
      </Wrapper>
    ) : (
      ''
    );
  }
}
