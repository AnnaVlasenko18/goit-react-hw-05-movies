import { getTrendingMovies } from 'api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import { MdOutlineNoPhotography } from 'react-icons/md';
import {
  ContainerHome,
  ListHome,
  TitleHome,
  ItemHome,
  LinkHome,
  InfoHome,
} from './HomePageStyled';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      try {
        const { results } = await getTrendingMovies();
        setMovies(prev => [...prev, ...results]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrending();
  }, []);

  const location = useLocation();

  return (
    <ContainerHome>
      <TitleHome>Trending today</TitleHome>

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

      <ListHome>
        {movies.length > 0 &&
          movies.map((movie, index) => {
            const { id, original_title, poster_path } = movie;
            const BASE_URL = 'https://image.tmdb.org/t/p/w200';
            const photo = BASE_URL + poster_path;

            return (
              <ItemHome key={index}>
                <LinkHome to={`movies/${id}`} state={{ from: location }}>
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
                  <InfoHome>{original_title}</InfoHome>
                </LinkHome>
              </ItemHome>
            );
          })}
      </ListHome>
    </ContainerHome>
  );
}
