import { API } from 'api/apiConstants';
import { instance } from 'api/defaultInstance';

export const signupUser = async user => {
  const data = await instance.post(API.ENDPOINT.USERS.SIGNUP, user);
  return data;
};
