import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { GlobalStyles } from 'css/GlobalStyles';
import SharedLayout from './SharedLayout/SharedLayout';

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

export const App = () => (
  <>
    <Global styles={GlobalStyles} />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route paht="" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </ThemeProvider>
  </>
);
