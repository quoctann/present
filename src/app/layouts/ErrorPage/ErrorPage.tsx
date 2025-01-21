import { useRouteError } from 'react-router';
import NavBar from '../NavBar';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-10 text-center">
        <h1>Oops!</h1>
        <p>Unexpected error occurred</p>
        <p>
          <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
