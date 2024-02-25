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
    avatarURL: payload.user.avatarURL,
  },
  token: payload.token,
  isLogin: true,
});

const handleLoginUserFulfilled = (state, { payload }) => ({
  ...state,
  user: {
    name: payload.user.name,
    email: payload.user.email,
    avatarURL: payload.user.avatarURL,
  },
  token: payload.token,
  isLogin: true,
});

const handleLogoutUserFulfilled = state => ({
  ...state,
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
  token: '',
  isLogin: false,
});

const handleFetchCurrentUserPending = state => ({
  ...state,
  isRefreshing: true,
});

const handleFetchCurrentUserFulfilled = (state, { payload }) => ({
  ...state,
  user: {
    name: payload.name,
    email: payload.email,
    avatarURL: payload.avatarURL,
  },
  isLogin: true,
  isRefreshing: false,
});

const handleFetchCurrentUserRejected = state => ({
  ...state,
  isRefreshing: false,
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
  handleFetchCurrentUserPending,
  handleFetchCurrentUserFulfilled,
  handleFetchCurrentUserRejected,
  handleRejected,
};
