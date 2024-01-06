const isPendingAction = ({ type }) =>
  typeof type === 'string' && type.endsWith('/pending');

const isFulfilledAction = ({ type }) =>
  typeof type === 'string' && type.endsWith('/fulfilled');

const isRejectedAction = ({ type }) =>
  typeof type === 'string' && type.endsWith('/rejected');

export { isPendingAction, isFulfilledAction, isRejectedAction };
