import { lazy } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { orange, lime } from '@mui/material/colors';
import { GlobalStyles } from 'css/GlobalStyles';
import { Container } from './Container.styled';

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
    <Container>
      <ThemeProvider theme={theme}></ThemeProvider>
    </Container>
  </>
);
