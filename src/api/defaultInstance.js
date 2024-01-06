import axios from 'axios';
import { API } from 'api/apiConstants';

export const instance = axios.create({
  baseURL: API.BASE_URL,
});
