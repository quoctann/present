import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
