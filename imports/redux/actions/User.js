import * as Actions from './Constants';

export const logout = () => {
  return { type: Actions.LOGOUT };
}

export const login = (user) => {
  console.log('what is user - ', user);
  return { type: Actions.LOGIN, user };
}

export const deleteUser = (userId) => {
  return { type: Actions.DELETE_ACCOUNT, userId };
}

export const createUser = (user) => {
  return { type: Actions.CREATE_ACCOUNT, user };
}