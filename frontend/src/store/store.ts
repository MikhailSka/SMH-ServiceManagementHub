import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deviceReducer from './reducers/deviceReducer/deviceReducer';
import { DeviceState } from './reducers/deviceReducer/DeviceState';
import userReducer from './reducers/userReducer/UserReducer';
import { UserState } from './reducers/userReducer/UserState';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  device: deviceReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export interface RootState {
  device: DeviceState;
  user: UserState;
}

export type AppDispatch = typeof store.dispatch;