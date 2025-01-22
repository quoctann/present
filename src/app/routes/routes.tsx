import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router';
import App from '../../App';
import ErrorPage from '../layouts/ErrorPage';
import About from '../pages/About';
import { CopyPasta, CopyPastaLoader } from '../pages/CopyPasta';
import HomePage from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Portfolio from '../pages/Portfolio';
import { RoutePath } from './path';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Pages with header navbar and footer  */}
      <Route path={RoutePath.Root} element={<App />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path={RoutePath.Login} element={<LoginPage />} />
          <Route path={RoutePath.About} element={<About />} />
          <Route path={RoutePath.CopyPasta} element={<CopyPasta />} loader={CopyPastaLoader} />
        </Route>
      </Route>

      {/* Standalone pages without header and footer */}
      <Route element={<Outlet />} errorElement={<ErrorPage />}>
        <Route path={RoutePath.Portfolio} element={<Portfolio />} />
      </Route>
    </>
  )
);

export default Router;
