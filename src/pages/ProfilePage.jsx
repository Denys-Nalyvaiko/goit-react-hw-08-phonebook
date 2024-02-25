import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../redux/auth/selectUser';

const ProfilePage = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={user.avatarURL} alt={user.name} />

      <Link to="/profile/update">Update Profile</Link>
    </>
  );
};

export default ProfilePage;
