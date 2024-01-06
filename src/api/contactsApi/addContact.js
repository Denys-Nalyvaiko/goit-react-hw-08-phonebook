import { API } from '../apiConstants';
import { instance } from '../defaultInstance';

export const addContact = async contact => {
  const data = await instance.post(API.ENDPOINT.CONTACTS, contact);
  return data;
};
