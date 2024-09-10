import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Dashpord from "../layouts/Dashpord";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/Login";
import SignUp from "../pages/Singup";
import Profile from "../pages/Profile";
import PostDetails from "../pages/PostDetails";
import AddIdeaForm from "../componentes/IdeaFo";
import IdeaCard from "../componentes/IdeaCard";
import IdeasPage from "../pages/IdeasPage";
import AdminUsersTable from "../layouts/Dashpord/Dashbord_nodes/AdminUsersTable ";
import RandomIdeasPage from "../pages/randomIdeasPage";
import Liked_Ideas from "../pages/likedideas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> error page not found or thomething is wrong</h1>,
    children: [
      { path: "", element: <Homepage /> },

      //   { path: "", element: < /> },
      { path: "/PostDetails/:id", element: <PostDetails /> },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: (
          <h1>Profile error page not found or thomething is wrong</h1>
        ),
        children: [
          {
            path: "/profile/information",
            element: <h1>information Profile Page</h1>,
          },
          {
            path: "/profile/ideas",
            element: <IdeasPage />,
          },
          {
            path: "/profile/liked-ideas",
            element: <Liked_Ideas />,
          },
          {
            path: "/profile/addideas",
            element: <AddIdeaForm />,
          },
          {
            path: "/profile/PostDetails/:id",
            element: <PostDetails />,
          },
        ],
      },
      { path: "ideas", element: <RandomIdeasPage /> },
      { path: "/about", element: <h1>About Page</h1> },
      {
        path: "/Dashbord",
        element: <Dashpord />,
        errorElement: (
          <h1>Dashbord error page not found or thomething is wrong</h1>
        ),
        children: [
          { path: "/Dashbord/profile", element: <h1>Profile Page</h1> },
          { path: "/Dashbord/dashboard", element: <h1>Dashboard Page</h1> },
          { path: "/Dashbord/users", element: <AdminUsersTable /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignUp /> },

  { path: "/PostDetails", element: <PostDetails /> },
]);
