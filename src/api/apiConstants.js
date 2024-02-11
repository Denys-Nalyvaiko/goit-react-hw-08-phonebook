export const API = Object.freeze({
  BASE_URL: 'http://localhost:8000',
  ENDPOINT: Object.freeze({
    CONTACTS: '/contacts',
    USERS: Object.freeze({
      SIGNUP: '/users/signup',
      LOGIN: '/users/login',
      LOGOUT: '/users/logout',
      CURRENT: '/users/current',
    }),
  }),
});
