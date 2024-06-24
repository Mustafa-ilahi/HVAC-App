import {combineReducers} from '@reduxjs/toolkit';
import roleSlice from './manageRole';
import authSlice from './authToken';

const rootReducer = combineReducers({
  manageRole: roleSlice,
  auth: authSlice,
});
export default rootReducer;
