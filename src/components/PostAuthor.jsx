import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar2.jpg";
import Profile from "../assets/images/profile.png";

const PostAuthor = ({ authorID }) => {
  return (
    <Link to={`/myposts`} className="post__author">
      <div className="post__author_avatar">
        <img src={authorID === "50" ? Profile : Avatar} alt="" />
      </div>
      <div className="post__author_details">
        <h5>{`By:${authorID === "50" ? "You" : "Eudes Gomes"}`}</h5>
        <small>Agora</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
