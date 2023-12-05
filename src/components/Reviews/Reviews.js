import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner';
import {
  ListReviews,
  ItemReviews,
  AuthorReviews,
  TextReviews,
} from './ReviewsStyled';

export const Reviews = () => {
  const [isLoading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const feachReviews = async () => {
      setLoading(true);
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    feachReviews();
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

      {reviews.length > 0 && (
        <div>
          <ListReviews>
            {reviews.map(reviews => {
              const { author, content } = reviews;
              return (
                <ItemReviews key={author}>
                  <AuthorReviews>{author}</AuthorReviews>
                  <TextReviews>{content}</TextReviews>
                </ItemReviews>
              );
            })}
          </ListReviews>
        </div>
      )}
      {reviews.length === 0 && !isLoading && (
        <TextReviews>We don't have any reviews for this movie yet.</TextReviews>
      )}
    </>
  );
};
