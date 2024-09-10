import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_link } from "../api_link";
export const getsingleuser = createAsyncThunk(
  "singleusers_Slice/get_user_by_id",
  async (id) => {
    const response = await axios.get(`${api_link}/users/${id}`);
    return response.data;
  }
);
const singleusers_Slice = createSlice({
  name: "singleusers_Slice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsingleuser.fulfilled, (state, action) => {
      return action.payload;
    });
    // delete user
    // builder.addCase(delete_User.fulfilled, (state, action) => {
    //   return state.filter((user) => user.id !== action.payload);
    // });
    // builder.addCase(delete_User.rejected, (state, action) => {
    //   return state;
    // });
    // get_users_by_type
    // builder.addCase(get_users_by_type.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   return action.payload;
    // });
    // builder.addCase(get_user_by_id.fulfilled, (state, action) => {
    //   return action.payload;
    // // });
    // builder.addCase(update_user_type.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   return action.payload;
    // });
  },
});
export const singleuserreducer = singleusers_Slice.reducer;
export default singleusers_Slice.actions;
