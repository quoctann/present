import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import CopyPasta, { loader as CopyPastaLoader } from './features/copypasta/CopyPasta.tsx';
import './index.css';
import About from './pages/About.tsx';
import App from './pages/App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import { RoutePath } from './routes/routing.ts';

const router = createBrowserRouter(
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
