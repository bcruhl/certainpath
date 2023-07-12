import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';

//configureStore gives us access to redux-devtools
export const store = configureStore({
  reducer: {
    //Add 'old style' feature reducers/slices here
    [api.reducerPath]: api.reducer
  },
  // Dynamically creates the store for the api RTK Query code
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
