import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { api_link } from "../api_link";

// Get all comments
export const get_all_comments = createAsyncThunk(
  "commentsSlice/get_all_comments",
  async () => {
    const response = await axios.get(`${api_link}/comments`);
    return response.data;
  }
);

// Create a new comment
export const create_comment = createAsyncThunk(
  "commentsSlice/create_comment",
  async (payload) => {
    const req = await axios
      .post(`${api_link}/ideas/${payload.ideaid}`, payload.data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Comment created successfully");
        }
        return response.data;
      })
      .catch((error) => {
        toast.error(`${error.response.data}`);
      });
    return req;
  }
);

// Delete a comment
export const delete_comment = createAsyncThunk(
  "commentsSlice/delete_comment",
  async (id) => {
    await axios.delete(`${api_link}/comments/${id}`);
    toast.success("Comment deleted successfully");
    return id; // نعيد الـ id ليتم حذفه من الـ state
  }
);

// Get comment by id
export const get_comment_by_id = createAsyncThunk(
  "commentsSlice/get_comment_by_id",
  async (id) => {
    const response = await axios.get(`${api_link}/comments/${id}`);
    return response.data;
  }
);

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // Get all comments
    builder.addCase(get_all_comments.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_all_comments.rejected, (state, action) => {
      return state;
    });

    // Create a comment
    builder.addCase(create_comment.fulfilled, (state, action) => {
      state.push(action.payload); // إضافة التعليق الجديد إلى الـ state
    });
    builder.addCase(create_comment.rejected, (state, action) => {
      return state;
    });

    // Delete a comment
    builder.addCase(delete_comment.fulfilled, (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    });
    builder.addCase(delete_comment.rejected, (state, action) => {
      return state;
    });

    // Get comment by id
    builder.addCase(get_comment_by_id.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
export default commentsSlice.actions;
