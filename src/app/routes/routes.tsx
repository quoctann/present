import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import HomePage from '../pages/Home';
import ErrorPage from '../layouts/ErrorPage';
import About from '../pages/About';
import { CopyPasta, CopyPastaLoader } from '../pages/CopyPasta';
import LoginPage from '../pages/LoginPage';
import App from '../../App';
import { RoutePath } from './path';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={RoutePath.Root} element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path={RoutePath.Login} element={<LoginPage />} />
        <Route path={RoutePath.About} element={<About />} />
        <Route path={RoutePath.CopyPasta} element={<CopyPasta />} loader={CopyPastaLoader} />
      </Route>
    </Route>
  )
);

export default Router;
