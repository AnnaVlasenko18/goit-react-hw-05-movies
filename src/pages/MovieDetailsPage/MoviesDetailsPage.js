import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import {
  LinkDetailsPage,
  TextDetailsPage,
  ListDetailsPage,
  BackLinkDetailsPage,
  ContainerDetailsPage,
} from './MovieDetailsPageStyled';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLink = useRef(location);

  return (
    <ContainerDetailsPage>
      <LinkDetailsPage to={backLink.current.state?.from ?? '/movies'}>
        <IoIosArrowBack
          style={{ width: '16px', height: '16px', verticalAlign: 'bottom' }}
        />
        Go back
      </LinkDetailsPage>
      <MovieDetails />
      <div>
        <TextDetailsPage>Additional information:</TextDetailsPage>
        <ListDetailsPage>
          <li>
            <BackLinkDetailsPage to="cast">Cast</BackLinkDetailsPage>
          </li>
          <li>
            <BackLinkDetailsPage to="reviews">Reviews</BackLinkDetailsPage>
          </li>
        </ListDetailsPage>
      </div>

      <Outlet />
    </ContainerDetailsPage>
  );
}
