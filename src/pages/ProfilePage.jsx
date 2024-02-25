import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../redux/auth/selectUser';
import { API } from 'api/apiConstants';

const ProfilePage = () => {
  const user = useSelector(selectUser);

  const currentURL = user.avatarURL.startsWith('avatar')
    ? `${API.BASE_URL}/${user.avatarURL}`
    : user.avatarURL;

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={currentURL} alt={user.name} width="200" />

      <Link to="/profile/update">Update Profile</Link>
    </>
  );
};

export default ProfilePage;
