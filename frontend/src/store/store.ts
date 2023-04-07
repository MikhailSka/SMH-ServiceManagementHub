import { configureStore } from '@reduxjs/toolkit'
import deviceReducer from './reducers/deviceReducer'
import { DeviceState } from './reducers/deviceReducer'

const store = configureStore({
  reducer: {
    device: deviceReducer
  }
})

export default store

export interface RootState {
  device: DeviceState;
  // add other state slices as needed
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
