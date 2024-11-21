import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import CategoryPosts from "./pages/CategoryPosts";
import Dashboard from "./pages/Dashboard";
import EditPost from "./pages/EditPost";
import MyPosts from "./pages/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      { key: "1", path: "posts/:id", element: <PostDetail /> },
      { key: "2", path: "register", element: <Register /> },
      { key: "3", path: "login", element: <Login /> },
      { key: "4", path: "profile/:id", element: <UserProfile /> },
      { key: "5", path: "authors", element: <Authors /> },
      { key: "6", path: "create", element: <CreatePost /> },
      { key: "7", path: "allposts", element: <Dashboard /> },
      { key: "9", path: "myposts", element: <MyPosts /> },

      {
        key: "10",
        path: "posts/categories/:category",
        element: <CategoryPosts />,
      },
      { key: "11", path: "posts/:id/edit", element: <EditPost /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
