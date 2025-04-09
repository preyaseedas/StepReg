import {configureStore} from '@reduxjs/toolkit';
import RegistrationSlice from './RegistrationSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    regSlice: RegistrationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
