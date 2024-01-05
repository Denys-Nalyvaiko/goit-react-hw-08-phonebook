import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  LinkContainer,
  NavigationLink,
} from './SharedLayout.styled';

const SharedLayout = () => (
  <>
    <NavigationContainer>
      <LinkContainer>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="contacts">Contacts</NavigationLink>
      </LinkContainer>
      <LinkContainer>
        <NavigationLink to="register">Register</NavigationLink>
        <NavigationLink to="login">Login</NavigationLink>
      </LinkContainer>
    </NavigationContainer>
    <Suspense>
      <Outlet />
    </Suspense>
  </>
);

export default SharedLayout;
