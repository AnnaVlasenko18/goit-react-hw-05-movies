import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <p>
      Oooooops! Page not found. You can return to our{' '}
      <Link to="/">home page</Link>
    </p>
  );
}
