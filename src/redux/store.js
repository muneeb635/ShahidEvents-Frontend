import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { AdminPanal } from './sevices/adminPanal';

export const store = configureStore({
  reducer: {
    [AdminPanal.reducerPath]: AdminPanal.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AdminPanal.middleware),
});
setupListeners(store.dispatch);
