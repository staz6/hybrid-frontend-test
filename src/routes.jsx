/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from "react";
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
  }


];
