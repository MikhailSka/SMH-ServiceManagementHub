import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deviceReducer from './reducers/tableRedusers/deviceReducer/deviceReducer';
import { DeviceState } from './reducers/tableRedusers/deviceReducer/DeviceState';
import userReducer from './reducers/userReducer/UserReducer';
import { UserState } from './reducers/userReducer/UserState';
import postReducer from './reducers/tableRedusers/postReduser/postReducer';
import { PostState } from './reducers/tableRedusers/postReduser/PostState';
import snackbarReducer from './reducers/componentsRedusers/snackbarReduser/snackbarReducer';
import { SnackbarState } from './reducers/componentsRedusers/snackbarReduser/SnackbarState';
import customerReduser from './reducers/tableRedusers/customerReduser/customerReduser';
import { CustomerState } from './reducers/tableRedusers/customerReduser/CustomerState';
import locationReduser from './reducers/tableRedusers/locationReduser/locationReduser';
import { LocationState } from './reducers/tableRedusers/locationReduser/LocationState';
import operatorReduser from './reducers/tableRedusers/operatorReduser/operatorReduser';
import { OperatorState } from './reducers/tableRedusers/operatorReduser/OperatorState';
import unitReduser from './reducers/tableRedusers/unitReduser/unitReduser';
import { UnitState } from './reducers/tableRedusers/unitReduser/UnitState';
import unitHistoryReduser from './reducers/tableRedusers/unitHistoryReduser/unitHistoryReduser';
import { UnitHistoryState } from './reducers/tableRedusers/unitHistoryReduser/UnitHistoryState';
import sideNavBarReducer from './reducers/componentsRedusers/sideNavBarReducer/sideNavBarReducer';
import { SideNavBarState } from './reducers/componentsRedusers/sideNavBarReducer/SideNavBarState';
import serviceReduser from './reducers/tableRedusers/serviceReduser/serviceReduser';
import { ServiceState } from './reducers/tableRedusers/serviceReduser/ServiceState';

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
  location: locationReduser,
  operator: operatorReduser,
  unit: unitReduser,
  unitHistory: unitHistoryReduser,
  sideNavBar: sideNavBarReducer,
  service: serviceReduser
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
  location: LocationState;
  operator: OperatorState;
  unit: UnitState;
  unitHistory: UnitHistoryState;
  sideNavBar: SideNavBarState;
  service: ServiceState;
}

export type AppDispatch = typeof store.dispatch;