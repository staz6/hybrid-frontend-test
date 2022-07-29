import React from "react";
import NotFound from "./NotFound";
import Home from "./pages/Home";
import Post from "./pages/Post";
export default [
  {
    path: "/",
    exact: true,
    component: <Home/>,
  },
  {
      path:"/post/:id",
      exact:true,
      component:<Post/>,
  },


];
