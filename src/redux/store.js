import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { advertsApi } from './catalog/catalogSlice';
import { favoriteSlice } from './favorite/favoriteSlice';
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
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  [advertsApi.reducerPath]: advertsApi.reducer,
  favorite: favoriteSlice.reducer,
});

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(advertsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
