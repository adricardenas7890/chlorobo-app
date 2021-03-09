import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Components/App/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
