import { useSelector, useDispatch } from 'react-redux';
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
      <LogoutButton onClick={handleLogoutBtnClick}>Log out</LogoutButton>
    </>
  );
};

export default UserMenu;
