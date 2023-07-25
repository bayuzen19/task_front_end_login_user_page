import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SET_USERS } from './actionTypes';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});
