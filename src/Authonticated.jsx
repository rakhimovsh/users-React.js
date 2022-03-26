import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Posts from "./Pages/Posts/Posts";
import Comments from "./Pages/Comments/Comments";
import Header from "./Components/Header/Header";

function Authonticated() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/comments/:postId" element={<Comments />} />
      </Routes>
    </>
  );
}

export default Authonticated;
