import { searchMovies } from 'api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import { MdOutlineNoPhotography } from 'react-icons/md';

import {
  ContainerMovies,
  InfoMovies,
  ItemMovies,
  ListMovies,
  SecondaryText,
  LinkMovies,
  FormMovies,
  InputMovies,
} from './MoviesPageStyled';

export default function Movies() {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [params, setParams] = useSearchParams();
  const searchedMovie = params.get('movie') ?? '';

  useEffect(() => {
    const FeachMovie = async () => {
      setLoading(true);
      try {
        if (!searchedMovie) {
          return;
        }
        const { results } = await searchMovies(searchedMovie);
        if (!results) {
          return;
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    FeachMovie();
  }, [searchedMovie]);

  const location = useLocation();

  const onSearch = evt => {
    evt.preventDefault();

    const { value } = evt.target.elements.movie;
    if (value) {
      setParams({ movie: value });
    }
  };

  return (
    <>
      <FormMovies onSubmit={onSearch}>
        <InputMovies
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          name="movie"
        ></InputMovies>
      </FormMovies>

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

      {movies.length > 0 && !isLoading && (
        <ContainerMovies>
          <ListMovies>
            {movies.length > 0 &&
              movies.map((movie, index) => {
                const { id, original_title, poster_path } = movie;
                const BASE_URL = 'https://image.tmdb.org/t/p/w200';
                const photo = BASE_URL + poster_path;

                return (
                  <ItemMovies key={index}>
                    <LinkMovies to={`movies/${id}`} state={{ from: location }}>
                      {poster_path ? (
                        <img src={photo} alt={original_title} />
                      ) : (
                        <MdOutlineNoPhotography
                          style={{
                            width: '200px',
                            height: '200px',
                            color: '#8080803b',
                          }}
                        />
                      )}
                      <InfoMovies>{original_title}</InfoMovies>
                    </LinkMovies>
                  </ItemMovies>
                );
              })}
          </ListMovies>
        </ContainerMovies>
      )}
      {movies.length === 0 && !isLoading && searchedMovie && (
        <SecondaryText>Movie "{searchedMovie}" not found.</SecondaryText>
      )}
    </>
  );
}
