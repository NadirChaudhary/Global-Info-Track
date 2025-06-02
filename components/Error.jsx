import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const status = error?.status || 'Unknown';
  const message = error?.statusText || error?.message || 'Something went wrong.';

  return (
    <div className="error-wrapper">
      <div className="error-card">
        <h1 className="error-heading">😢 Oops!</h1>
        <p className="error-status">Status: <strong>{status}</strong></p>
        <p className="error-message">{message}</p>
        <Link to="/" className="error-button">Go back home</Link>
      </div>
    </div>
  );
}
