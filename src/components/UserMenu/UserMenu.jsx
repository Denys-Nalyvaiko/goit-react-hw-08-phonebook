import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../redux/auth/selectUser';
import { logoutUser } from '../../redux/auth/authOperations';
import { LogoutButton, UserTitle } from './UseMenu.styled';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogoutBtnClick = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <UserTitle>{email}</UserTitle>
      <Link to="/profile">Profile</Link>
      <LogoutButton onClick={handleLogoutBtnClick}>Log out</LogoutButton>
    </>
  );
};

export default UserMenu;
