import { API } from 'api/apiConstants';
import { instance } from 'api/defaultInstance';

export const fetchCurrentUser = async () => {
  const data = await instance.get(API.ENDPOINT.USERS.CURRENT);
  return data;
};
