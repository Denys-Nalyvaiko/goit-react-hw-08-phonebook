import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectUser';

const PublicRoute = ({ element, restricted, redirectTo = '' }) => {
  const isLogin = useSelector(selectIsLogin);
  const shouldNavigate = isLogin && restricted;

  return shouldNavigate ? <Navigate to={redirectTo} /> : element;
};

export default PublicRoute;
