import { configureStore } from '@reduxjs/toolkit';
import { sliceCurrency } from './currency/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'currency',
  storage,
  whitelist: ['baseCurrency'],
};

const persistedReducer = persistReducer(persistConfig, sliceCurrency.reducer);

export const store = configureStore({
  reducer: {
    [sliceCurrency.name]: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
