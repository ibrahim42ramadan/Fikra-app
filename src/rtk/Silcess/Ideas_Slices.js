import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { api_link } from "../api_link";

// get all ideas
export const get_all_ideas = createAsyncThunk(
  "ideas_Slice/get_all_ideas",
  async () => {
    const response = await axios.get(`${api_link}/ideas`);
    return response.data;
  }
);

// create a new idea
export const create_idea = createAsyncThunk(
  "ideas_Slice/create_idea",
  async (payload) => {
    const req = await axios
      .post(`${api_link}/ideas`, payload)
      .then((response) => {
        if ((response.statusText = "Created")) {
          toast.success("Idea created successfully");
        }
        return response.data;
      })
      .catch((error) => {
        toast.error(`${error.response.data}`);
      });
  }
);

// delete idea
export const delete_idea = createAsyncThunk(
  "ideas_Slice/delete_idea",
  async (id) => {
    await axios.delete(`${api_link}/ideas/${id}`);
    toast.success("Idea deleted successfully");
  }
);

// get ideas by category
export const get_ideas_by_category = createAsyncThunk(
  "ideas_Slice/get_ideas_by_category",
  async (category) => {
    const clean_category = category.toLowerCase().trim();
    const response = await axios.get(
      `${api_link}/ideas?category=${clean_category}`
    );
    return response.data;
  }
);
// get ideas by id

export const get_idea_by_id = createAsyncThunk(
  "ideas_Slice/get_idea_by_id",
  async (id) => {
    const response = await axios.get(`${api_link}/ideas/${id}`);
    return response.data;
  }
);
// idd comment

export const comment_idea = createAsyncThunk(
  "ideas_Slice/comment_idea",
  async (payload) => {
    const response = await axios
      .get(`${api_link}/ideas/${payload.id}`)
      .then((response) => {
        let comments = response.data.comments;
        let idea = response.data;
        let newcomments = [...comments, payload.newcomments];
        let newidea = { ...idea, comments: newcomments };
        if (payload.newcomments) {
          axios.patch(`${api_link}/ideas/${payload.id}`, newidea);
        }
        return newidea;
      })
      .catch((error) => {
        toast.error(`${error.response.data}`);
      });
    return response;
  }
);
// adding alike

export const add_alike = createAsyncThunk(
  "ideas_Slice/add_alike",
  async (payload) => {
    try {
      // الحصول على الفكرة المطلوبة
      const ideaResponse = await axios.get(
        `${api_link}/ideas/${payload.ideaid}`
      );
      let idea = ideaResponse.data;
      let like = idea.likes;

      // الحصول على المستخدم
      const userResponse = await axios.get(
        `${api_link}/users/${payload.userid}`
      );
      let person = userResponse.data;
      let likedIdeas = person.likedIdeas;

      // تحقق ما إذا كان المستخدم قد قام بالإعجاب بالفعل
      let alreadyLiked = likedIdeas.find((id) => id === idea.id);
      if (alreadyLiked) {
        toast.error("You have already liked this idea.");
        return idea; // إرجاع الفكرة دون تعديل
      } else {
        // تحديث المستخدم بإضافة الفكرة للإعجابات
        const updatedUser = {
          ...person,
          likedIdeas: [...likedIdeas, idea.id],
        };
        await axios.patch(`${api_link}/users/${payload.userid}`, updatedUser);

        // تحديث الفكرة وزيادة عدد الإعجابات
        const updatedIdea = { ...idea, likes: like + 1 };
        await axios.patch(`${api_link}/ideas/${payload.ideaid}`, updatedIdea);

        toast.success("You liked the idea successfully.");
        return updatedIdea; // إرجاع الفكرة المحدثة
      }
    } catch (error) {
      toast.error(`Error: ${error.response?.data || "Unknown error"}`);
      throw error; // إرجاع الخطأ للتعامل معه في مكان آخر
    }
  }
);

const ideas_Slice = createSlice({
  name: "ideas_Slice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // create idea
    builder.addCase(create_idea.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(create_idea.rejected, (state, action) => {
      return state;
    });

    // get all ideas
    builder.addCase(get_all_ideas.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_all_ideas.rejected, (state, action) => {
      return state;
    });

    // delete idea
    builder.addCase(delete_idea.fulfilled, (state, action) => {
      return state.filter((idea) => idea.id !== action.payload);
    });
    builder.addCase(delete_idea.rejected, (state, action) => {
      return state;
    });

    // get ideas by category
    builder.addCase(get_ideas_by_category.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(get_idea_by_id.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(comment_idea.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(add_alike.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const ideas_Reducer = ideas_Slice.reducer;
export default ideas_Slice.actions;
