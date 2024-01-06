const handleSignupUserFulfilled = (state, { payload }) => ({
  ...state,
  user: {
    name: payload.user.name,
    email: payload.user.email,
  },
  token: payload.token,
  isLogin: true,
});

const handleLoginUserFulfilled = (state, { payload }) => ({
  ...state,
  user: {
    name: payload.user.name,
    email: payload.user.email,
  },
  token: payload.token,
  isLogin: true,
});

const handleLogoutUserFulfilled = state => ({
  ...state,
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
});

export {
  handleSignupUserFulfilled,
  handleLoginUserFulfilled,
  handleLogoutUserFulfilled,
};
