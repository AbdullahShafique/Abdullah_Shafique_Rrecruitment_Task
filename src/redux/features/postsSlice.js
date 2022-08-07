import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Posts: [],
  After: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsReducer: (state, action) => {
      state.Posts = state.Posts.concat(action.payload.Posts);
      state.After = action.payload.After;
    },
  },
});

// Action creators are generated for each case reducer function
export const {postsReducer} = postsSlice.actions;

export default postsSlice.reducer;
