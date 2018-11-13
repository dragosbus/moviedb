import React from 'react';
import styled from 'styled-components';

const ListStyled = styled.ul`
  overflow-y: hidden;
  width: 100%;
  list-style: none;
  height: 21rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  @media(min-width:960px) {
    margin: 0 auto;
    width: 60%;
  }
`;

const ElementListStyled = styled.li`
  position: absolute;
  width: 10rem;
  box-shadow: 0.5rem 0.25rem 1rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  transition: all 0.35s ease-in;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  border-radius: 1.5rem;
`;

export const Movie = props => {
  return (
    <ListStyled>
      {props.data.slice(0, 10).map((movie, i) => {
        return (
          <ElementListStyled
            className="movie-trending"
            key={i}
            style={{ left: `${i * 120}px` }}
            onClick={() => props.toggleMovieDetails(movie.id)}
          >
            <ImageStyled
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.original_title}
            />
          </ElementListStyled>
        );
      })}
    </ListStyled>
  );
};
