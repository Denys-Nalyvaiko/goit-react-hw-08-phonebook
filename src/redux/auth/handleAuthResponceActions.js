const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleFulfilled = state => ({
  ...state,
  isLoading: false,
  error: null,
});

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

const handleRejected = (state, { payload }) => ({
  ...state,
  error: payload,
  isLoading: false,
});

export {
  handlePending,
  handleFulfilled,
  handleSignupUserFulfilled,
  handleLoginUserFulfilled,
  handleLogoutUserFulfilled,
  handleRejected,
};
