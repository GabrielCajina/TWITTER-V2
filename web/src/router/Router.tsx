import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../screens/404";
import EditTweet from "../screens/edit-tweet";
import Home from "../screens/home";
import Login from "../screens/login";
import Register from "../screens/register";
import Tweet from "../screens/tweet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="edit/:id" element={<EditTweet />} />
        <Route path=":id" element={<Tweet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
