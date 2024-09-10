import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { api_link } from "../api_link";
export const get_all_values = createAsyncThunk(
  "searchvalue_Slics/get_all_values ",
  async (value) => {
    const response = await axios
      .get(`${api_link}/ideas?title_like=${value}`)
      .then((res) => {
        console.log(value);

        return res.data;
      });
    return response;
  }
);
export const searchvalue_Slics = createSlice({
  name: "searchvalue_Slics",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get_all_values.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_all_values.rejected, (state, action) => {
      return state;
    });
  },
});
export const searchvalueReducer = searchvalue_Slics.reducer;
export default searchvalue_Slics.actions;
