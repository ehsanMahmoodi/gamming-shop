import { configureStore } from "@reduxjs/toolkit";
import allGamesSlice from './Slices/allGamesSlice'
import gameCartSlice from './Slices/gameCartSlice'
const store = configureStore({
  reducer: {
    allGamesSlice,
    gameCartSlice
  },
});

export default store;
