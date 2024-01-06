import { API } from 'api/apiConstants';
import { instance } from 'api/defaultInstance';

export const loginUser = async user => {
  const data = await instance.get(API.ENDPOINT.USERS.LOGIN, user);
  return data;
};
