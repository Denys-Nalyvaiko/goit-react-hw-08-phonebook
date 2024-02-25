import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAvatar } from '../redux/auth/authOperations';

const UpdateProfilePage = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(updateUserAvatar(file));
  };

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  return (
    <form action="submit" onSubmit={handleFormSubmit}>
      <input name="avatar" type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UpdateProfilePage;
