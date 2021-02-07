import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'state/users/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,   
 },
});
