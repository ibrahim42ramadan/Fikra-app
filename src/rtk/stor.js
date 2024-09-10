import { configureStore } from "@reduxjs/toolkit";
import { users_Reducer } from "./Silcess/user_slics";
import { ideas_Reducer } from "./Silcess/Ideas_Slices";
import { searchvalueReducer } from "./Silcess/search-slics";
import { singleuserreducer } from "./Silcess/singleuser";
import { singleideareducer } from "./Silcess/singeleidea";

export const store = configureStore({
  reducer: {
    user: users_Reducer,
    ideas: ideas_Reducer,
    search: searchvalueReducer,
    singeluser: singleuserreducer,
    singeliIdea: singleideareducer,
    // allcomentes:,
    // likes:,
    // dislikes:,
    // userIdeas:,
    // userComments:,
    // userLikes:,
    // userDislikes:,
    // userFollowers:,
    // userFollowing:,
    // userIdeasComments:,
    // userIdeasLikes:,
    // userIdeasDislikes:,
    // userIdeasFollowers:,
    // userIdeasFollowing:,
    // userIdeasCommentsLikes:,
    // userIdeasCommentsDislikes:,
    // userIdeasCommentsFollowers:,
    // userIdeasCommentsFollowing:,
    // userIdeasCommentsLikesDislikes:,
    // userIdeasCommentsLikesFollowers:,
    // userIdeasCommentsLikesFollowing:,
    // userIdeasCommentsLikesDislikesFollowers:,
    // userIdeasCommentsLikesDislikesFollowing:,
    // userIdeasCommentsLikesDislikesFollowersFollowing:,
    // comments:,
  },
});
