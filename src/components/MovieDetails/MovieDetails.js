import { getMovieDetails } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import {
  ContainerDetails,
  TitleDetails,
  PhotoDetails,
  SecondaryTitelDetails,
  TextDetails,
  SpanDetails,
} from './MovieDetailsStyled';

import React from 'react';
import StarRatings from 'react-star-ratings';

export const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieDetails(movieId);
        setMovie({ ...response });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  const getAverage = () => {
    const { vote_average } = movie;
    return Math.round(vote_average * 10);
  };

  const makeImgURL = () => {
    const { poster_path } = movie;
    const BASE_URL = 'https://image.tmdb.org/t/p/w200';
    return BASE_URL + poster_path;
  };

  return (
    <>
      {error && <p>Oops, something went wrong, please try again later.</p>}
      {isLoading && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}

      {movie && (
        <div>
          <ContainerDetails>
            <PhotoDetails src={makeImgURL()} alt={movie.title}></PhotoDetails>
            <div>
              <TitleDetails>{movie.title}</TitleDetails>

              <StarRatings
                rating={getAverage() / 20}
                starRatedColor="gold"
                changeRating={newRating => console.log(newRating)}
                numberOfStars={5}
                name="rating"
              />

              <TextDetails>User score: {getAverage()}%</TextDetails>

              <SecondaryTitelDetails>Overview</SecondaryTitelDetails>
              <TextDetails>{movie.overview}</TextDetails>
              <SecondaryTitelDetails>Genres</SecondaryTitelDetails>
              {movie.genres.map(({ name }, index) => (
                <SpanDetails key={index}>{name} </SpanDetails>
              ))}
            </div>
          </ContainerDetails>
        </div>
      )}
    </>
  );
};
