import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import { MdOutlineNoPhotography } from 'react-icons/md';
import {
  ListCast,
  ItemCast,
  InfoContainerCast,
  NameCast,
  CharacterCast,
  PhotoCast,
} from './CastStyled';

export const Cast = () => {
  const [isLoading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const feachCast = async () => {
      setLoading(true);
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast([...cast]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    feachCast();
  }, [movieId]);

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

      {cast.length > 0 && (
        <div>
          <ListCast>
            {cast.map(actor => {
              const { profile_path, name, character } = actor;
              const BASE_URL = 'https://image.tmdb.org/t/p/w200';
              const photo = BASE_URL + profile_path;

              return (
                <ItemCast key={name}>
                  {profile_path ? (
                    <PhotoCast src={photo} alt={name} />
                  ) : (
                    <MdOutlineNoPhotography
                      style={{
                        width: '200px',
                        height: '200px',
                        color: '#8080803b',
                      }}
                    />
                  )}
                  <InfoContainerCast>
                    <NameCast>{name}</NameCast>
                    <CharacterCast>Character: {character}</CharacterCast>
                  </InfoContainerCast>
                </ItemCast>
              );
            })}
          </ListCast>
        </div>
      )}
    </>
  );
};
