import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from './authSlices/loginSlice';
import logoutSlice from './authSlices/logoutSlice';

const authReducer = combineReducers({
  login: loginSlice,
  logout: logoutSlice,
});

export default authReducer;
