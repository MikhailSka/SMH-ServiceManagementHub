import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deviceReducer from './reducers/deviceReducer/deviceReducer';
import { DeviceState } from './reducers/deviceReducer/DeviceState';
import userReducer from './reducers/userReducer/UserReducer';
import { UserState } from './reducers/userReducer/UserState';
import postReducer from './reducers/postReduser/postReducer';
import { PostState } from './reducers/postReduser/PostState';
import snackbarReducer from './reducers/snackbarReduser/snackbarReducer';
import { SnackbarState } from './reducers/snackbarReduser/SnackbarState';
import customerReduser from './reducers/customerReduser/customerReduser';
import { CustomerState } from './reducers/customerReduser/CustomerState';
import customerLocationReduser from './reducers/customerLocationReduser/customerLocationReduser';
import { CustomerLocationState } from './reducers/customerLocationReduser/CustomerLocationState';
import locationReduser from './reducers/locationReduser/locationReduser';
import { LocationState } from './reducers/locationReduser/LocationState';
import operatorReduser from './reducers/operatorReduser/operatorReduser';
import { OperatorState } from './reducers/operatorReduser/OperatorState';
import unitReduser from './reducers/unitReduser/unitReduser';
import { UnitState } from './reducers/unitReduser/UnitState';
import unitLocationReduser from './reducers/unitLocationReduser/unitLocationReduser';
import { UnitLocationState } from './reducers/unitLocationReduser/UnitLocationState';
import unitLocationHistoryReduser from './reducers/unitLocationHistoryReduser/unitLocationHistoryReduser';
import { UnitLocationHistoryState } from './reducers/unitLocationHistoryReduser/UnitLocationHistoryState';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  device: deviceReducer,
  user: userReducer,
  post: postReducer,
  snackbar: snackbarReducer,
  customer: customerReduser,
  customerLocation: customerLocationReduser,
  location: locationReduser,
  operator: operatorReduser,
  unit: unitReduser,
  unitLocation: unitLocationReduser,
  unitLocationHistory: unitLocationHistoryReduser
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
  post: PostState;
  snackbar: SnackbarState;
  customer: CustomerState;
  customerLocation: CustomerLocationState;
  location: LocationState;
  operator: OperatorState;
  unit: UnitState;
  unitLocation: UnitLocationState;
  unitLocationHistory: UnitLocationHistoryState;
}

export type AppDispatch = typeof store.dispatch;