import {configureStore} from '@reduxjs/toolkit';
import postsSlice from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    redditPosts: postsSlice,
  },

  // Code below is to deactivate SerializableStateInvariantMiddleware and ImmutableStateInvariantMiddleware  in development mode
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
