import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { AdminPanal } from './services/slicer';
import { AdmanPanalAPI } from './services/adminPanalAPI';

export const store = configureStore({
  reducer: {
    adminpanal: AdminPanal,
    [AdmanPanalAPI.reducerPath]: AdmanPanalAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AdmanPanalAPI.middleware),
});
setupListeners(store.dispatch);
