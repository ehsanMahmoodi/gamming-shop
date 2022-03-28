import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { All_Games_Url } from "../../api/apiList";
export const allGamesAction = createAsyncThunk(
  "/fetch-games",
  async (page) => {
    let responce = await axios.get(All_Games_Url(page))
      return responce.data
  }
);
const allGamesSlice = createSlice({
  name: "all-games",
  initialState: {
    status: "",
    games: [],
  },
    extraReducers:{
      [allGamesAction.pending]:(state)=>{
          state.status='pending'
      },
        [allGamesAction.fulfilled]:(state,action)=>{
            state.status='success'
            state.games=action.payload
        },
        [allGamesAction.rejected]:(state)=>{
            state.status='failed'
        },
    }
});

export default allGamesSlice.reducer