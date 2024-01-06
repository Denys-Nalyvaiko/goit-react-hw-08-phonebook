import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/auth/selectUser';
import {
  AuthLink,
  HelpfullInformation,
  Title,
} from 'css/Containers/Container.styled';

const HomePage = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <>
      <Title>Hello, my dear friend!</Title>
      {!isLogin && (
        <HelpfullInformation>
          To continue please <AuthLink to="login">Log In</AuthLink> or{' '}
          <AuthLink to="register">Sign Up</AuthLink>
        </HelpfullInformation>
      )}
    </>
  );
};

export default HomePage;
