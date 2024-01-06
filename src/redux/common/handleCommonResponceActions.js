const handlePending = state => ({
  ...state,
  isLoading: true,
});

const handleFulfilled = state => ({
  ...state,
  error: null,
  isLoading: false,
});

const handleRejected = (state, { payload }) => ({
  ...state,
  error: payload || null,
  isLoading: false,
});

export { handlePending, handleFulfilled, handleRejected };
