import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deviceReducer from './reducers/deviceReducer/deviceReducer';
import { DeviceState } from './reducers/deviceReducer/DeviceState';
import authReducer from './reducers/authReducer/authReducer';
import { AuthState } from './reducers/authReducer/AuthState';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  device: deviceReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

export interface RootState {
  device: DeviceState;
  auth: AuthState;
}

export type AppDispatch = typeof store.dispatch;