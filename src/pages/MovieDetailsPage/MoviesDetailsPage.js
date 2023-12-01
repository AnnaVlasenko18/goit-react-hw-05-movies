import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { DetailsMovie } from 'components/MovieDetails/MovieDetails';

export default function MovieDetails() {
  const location = useLocation();
  const backLink = useRef(location);

  <>
    <Link to={backLink.current.state?.from ?? '/movies'}>
      <IoIosArrowBack
        style={{ width: '16px', height: '16px', verticalAlign: 'bottom' }}
      />{' '}
      Go back
    </Link>
    <DetailsMovie />
    <div>
      <p>Additional information:</p>
      <ul>
        <li>
          <link to="cast">Cact</link>
        </li>
        <li>
          <link to="reviews">Reviews</link>
        </li>
      </ul>
    </div>

    <Outlet />
  </>;
}
