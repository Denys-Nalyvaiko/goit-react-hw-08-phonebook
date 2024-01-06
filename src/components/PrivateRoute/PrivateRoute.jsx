import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectUser';

const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
