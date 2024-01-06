import { API } from 'api/apiConstants';
import { instance } from 'api/defaultInstance';

export const logoutUser = async user => {
  const data = await instance.get(API.ENDPOINT.USERS.LOGOUT, user);
  return data;
};
