import { getMovieDetals } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';

export const DetailsMovie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieDetals(movieId);
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
      <div>
        <div>
          <img src={makeImgURL()} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {getAverage()}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres.map(({ name }, index) => (
              <span key={index}>{name} </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
