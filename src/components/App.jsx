import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { GlobalStyles } from 'css/GlobalStyles';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Loader from './Loader/Loader';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/selectUser';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const UpdateProfilePage = lazy(() => import('pages/UpdateProfilePage'));

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: lime,
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshingUser) {
    return (
      <>
        <Global styles={GlobalStyles} />
        <ThemeProvider theme={theme}>
          <Loader />
        </ThemeProvider>
      </>
    );
  }

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
              path="profile"
              element={
                <PrivateRoute element={<ProfilePage />} redirectTo="/login" />
              }
            />
            <Route
              path="profile/update"
              element={
                <PrivateRoute
                  element={<UpdateProfilePage />}
                  redirectTo="/login"
                />
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
