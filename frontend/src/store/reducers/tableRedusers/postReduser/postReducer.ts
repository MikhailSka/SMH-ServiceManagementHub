import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPost } from 'models/IPost';
import { PostState } from './PostState';

const initialState: PostState = {
  posts: [],
  selectedPost: null,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostViewsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPostViewsSuccess(state, action: PayloadAction<IPost[]>) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostViewsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    selectPostView(state, action: PayloadAction<IPost>) {
      state.selectedPost = action.payload;
    },
  },
});

export const {
  getPostViewsStart,
  getPostViewsSuccess,
  getPostViewsFailure,
  selectPostView,
} = postSlice.actions;

export default postSlice.reducer;