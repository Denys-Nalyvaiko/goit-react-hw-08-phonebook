import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { GlobalStyles } from 'css/GlobalStyles';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { fetchCurrentUser } from '../redux/auth/authOperations';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: lime,
  },
});

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route paht="" element={<SharedLayout />}>
            <Route index element={<PublicRoute element={<HomePage />} />} />
            <Route
              path="register"
              element={
                <PublicRoute
                  element={<RegisterPage />}
                  redirectTo={'/contacts'}
                  restricted
                />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute
                  element={<LoginPage />}
                  redirectTo={'/contacts'}
                  restricted
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />
            <Route
              path="*"
              element={<PublicRoute element={<h2>Not Found</h2>} />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
