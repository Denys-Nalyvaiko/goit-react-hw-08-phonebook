import { API } from '../apiConstants';
import { instance } from '../defaultInstance';

export const fetchContacts = async () => {
  const data = await instance.get(API.ENDPOINT.CONTACTS);
  return data;
};
