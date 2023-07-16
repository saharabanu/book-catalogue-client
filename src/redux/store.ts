import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import bookReducer from './features/book/bookSlice'

const store = configureStore({
  reducer: {
    book:bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { api: ApiState }
export type AppDispatch = typeof store.dispatch;

export default store;