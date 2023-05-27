import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { Layout } from './containers/Layout/Layout';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';
import { MovieListPage } from './containers/MovieListPage/MovieListPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

import { Signin } from './components/Auth/Signin';
import { Signup } from './components/Auth/Signup';
import { UserProvider } from './context/UserContext';
import { OrderContextProvider } from './context/orderContext';
// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import { FavoritesListPage } from './containers/FavoritesListPage/FavoritesListPage';
import { HandleOrder } from './components/OrderReview/HandleOrder';
import { LogInDialog } from './components/LogInDialog/LogInDialog';

// Routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />,
      },
      {
        path: '/favorites',
        element: <FavoritesListPage />,
      },
      {
        path: '/movies',
        element: <MovieListPage />,
      },
      {
        path: '/order',
        element: <HandleOrder />,
      },
      {
        path: '/userLogIn',
        element: <LogInDialog />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <UserProvider>
      <OrderContextProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </OrderContextProvider>
    </UserProvider>
  );
};
