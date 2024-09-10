import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { api_link } from "../api_link";
// get all users
export const get_all_users = createAsyncThunk(
  "users_Slice/get_all_users ",
  async () => {
    const response = await axios.get(`${api_link}/users`);
    return response.data;
  }
);
// create a new user
export const create_user = createAsyncThunk(
  "users_Slice/create_user",
  async (payload) => {
    const req = await axios
      .post(`${api_link}/users`, payload)
      .then((response) => {
        if ((response.statusText = "Created")) {
          toast.success("created successfully");
        }
        return req;
      })
      .catch((error) => {
        toast.error(`${error.response.data}`);
      });
  }
);
// login user
export const login_user = createAsyncThunk(
  "users_Slice/login_user",
  async (payload) => {
    const response = await axios
      .post(`${api_link}/login`, payload)
      .then((res) => {
        if ((res.status === 201) | (res.status === 200)) {
          toast.success("Logged in successfully");
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        console.log(err);

        toast.error("Invalid credentials");
      });
  }
);
// delete user
export const delete_User = createAsyncThunk(
  "users_Slice/delete_User",
  async (id) => {
    await axios.delete(`${api_link}/users/${id}`);
    toast.success(" Deleted user is  successfully");
  }
);

// get_users_by_type

export const get_users_by_type = createAsyncThunk(
  "users_Slice/get_users_by_type",
  async (type) => {
    const clean_type = type.toLowerCase().trim();
    const response = await axios.get(`${api_link}/users?type=${clean_type}`);
    return response.data;
  }
);
// get user by id

export const get_user_by_id = createAsyncThunk(
  "users_Slice/get_user_by_id",
  async (id) => {
    const response = await axios.get(`${api_link}/users/${id}`);
    return response.data;
  }
);
// update_user_type
export const update_user_type = createAsyncThunk(
  "users/updateUserType",
  async ({ id, type }) => {
    const response = await axios.patch(`${api_link}/users/${id}`, { type });
    toast.success("User type updated successfully");
    return response.data;
  }
);
const users_Slice = createSlice({
  name: "users_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // create a user
    builder.addCase(create_user.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(create_user.rejected, (state, action) => {
      return state;
    });
    // get all users
    builder.addCase(get_all_users.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(get_all_users.rejected, (state, action) => {
      return state;
    });
    // delete user
    builder.addCase(delete_User.fulfilled, (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    });
    builder.addCase(delete_User.rejected, (state, action) => {
      return state;
    });
    // get_users_by_type
    builder.addCase(get_users_by_type.fulfilled, (state, action) => {
      console.log(action.payload);

      return action.payload;
    });
    builder.addCase(get_user_by_id.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(update_user_type.fulfilled, (state, action) => {
      console.log(action.payload);

      return action.payload;
    });
  },
});
export const users_Reducer = users_Slice.reducer;
export default users_Slice.actions;
