import { configureStore } from "@reduxjs/toolkit";
import allGamesSlice from './Slices/allGamesSlice'
const store = configureStore({
  reducer: {
    allGamesSlice
  },
});

export default store;
