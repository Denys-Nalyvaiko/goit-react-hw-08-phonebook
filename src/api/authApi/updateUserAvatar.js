import { API } from 'api/apiConstants';
import { instance } from 'api/defaultInstance';

export const updateUserAvatar = async avatar => {
  const data = await instance.patch(API.ENDPOINT.USERS.AVATAR, avatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
