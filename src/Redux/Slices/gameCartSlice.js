import { createSlice } from "@reduxjs/toolkit";

const gameCartSlice = createSlice({
  name: "game-cart",
  initialState: {
    count: 0,
    list: [],
  },
  reducers: {
    buyGameAction: (state,action) => {
      state.count = action.payload;
    },
    gameListAction: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const {buyGameAction,gameListAction} = gameCartSlice.actions
export default gameCartSlice.reducer