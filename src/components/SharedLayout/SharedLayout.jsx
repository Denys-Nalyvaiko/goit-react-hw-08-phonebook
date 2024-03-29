import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectUser';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import Loader from 'components/Loader/Loader';
import {
  NavigationContainer,
  LinkContainer,
  NavigationLink,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <NavigationContainer>
        <LinkContainer>
          <NavigationLink to="/">Home</NavigationLink>
          {isLogin && <NavigationLink to="contacts">Contacts</NavigationLink>}
        </LinkContainer>
        <LinkContainer>{isLogin ? <UserMenu /> : <AuthMenu />}</LinkContainer>
      </NavigationContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
